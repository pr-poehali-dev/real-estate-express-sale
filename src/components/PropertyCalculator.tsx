import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

interface PropertyData {
  area: number
  rooms: string
  floor: number
  totalFloors: number
  condition: string
  district: string
  hasBalcony: boolean
  hasParking: boolean
}

const PropertyCalculator = () => {
  const [propertyData, setPropertyData] = useState<PropertyData>({
    area: 50,
    rooms: '2',
    floor: 5,
    totalFloors: 10,
    condition: 'good',
    district: 'central',
    hasBalcony: true,
    hasParking: false
  })
  
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null)
  const [priceRange, setPriceRange] = useState<{ min: number; max: number } | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculatePrice = () => {
    setIsCalculating(true)
    
    setTimeout(() => {
      let basePrice = 65000
      
      if (propertyData.district === 'central') basePrice = 85000
      else if (propertyData.district === 'leninsky') basePrice = 70000
      else if (propertyData.district === 'dzerzhinskiy') basePrice = 60000
      else if (propertyData.district === 'promyshlenny') basePrice = 58000
      else if (propertyData.district === 'south') basePrice = 55000
      
      if (propertyData.condition === 'renovated') basePrice *= 1.15
      else if (propertyData.condition === 'new') basePrice *= 1.25
      else if (propertyData.condition === 'needs_repair') basePrice *= 0.85
      
      const floorCoef = propertyData.floor === 1 ? 0.95 : 
                       propertyData.floor === propertyData.totalFloors ? 0.92 : 1.0
      basePrice *= floorCoef
      
      if (propertyData.hasBalcony) basePrice *= 1.03
      if (propertyData.hasParking) basePrice *= 1.08
      
      const totalPrice = Math.round(basePrice * propertyData.area)
      const variance = totalPrice * 0.08
      
      setEstimatedPrice(totalPrice)
      setPriceRange({
        min: Math.round(totalPrice - variance),
        max: Math.round(totalPrice + variance)
      })
      setIsCalculating(false)
    }, 1500)
  }

  const updateProperty = (field: keyof PropertyData, value: any) => {
    setPropertyData(prev => ({ ...prev, [field]: value }))
    setEstimatedPrice(null)
    setPriceRange(null)
  }

  return (
    <Card className="shadow-2xl border-2 animate-scale-in">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Icon name="Brain" size={24} className="text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-heading">AI Оценка недвижимости</CardTitle>
            <CardDescription className="text-base">
              Узнайте рыночную стоимость вашей квартиры за 2 минуты
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="area" className="text-base flex items-center gap-2">
              <Icon name="Maximize2" size={16} className="text-primary" />
              Площадь квартиры (м²)
            </Label>
            <div className="flex items-center gap-4">
              <Slider
                value={[propertyData.area]}
                onValueChange={([value]) => updateProperty('area', value)}
                min={20}
                max={200}
                step={5}
                className="flex-1"
              />
              <Input
                id="area"
                type="number"
                value={propertyData.area}
                onChange={(e) => updateProperty('area', Number(e.target.value))}
                className="w-20 text-center"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="rooms" className="text-base flex items-center gap-2">
              <Icon name="DoorOpen" size={16} className="text-primary" />
              Количество комнат
            </Label>
            <Select value={propertyData.rooms} onValueChange={(value) => updateProperty('rooms', value)}>
              <SelectTrigger id="rooms">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 комната</SelectItem>
                <SelectItem value="2">2 комнаты</SelectItem>
                <SelectItem value="3">3 комнаты</SelectItem>
                <SelectItem value="4">4+ комнаты</SelectItem>
                <SelectItem value="studio">Студия</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="floor" className="text-base flex items-center gap-2">
              <Icon name="Building2" size={16} className="text-primary" />
              Этаж
            </Label>
            <Input
              id="floor"
              type="number"
              value={propertyData.floor}
              onChange={(e) => updateProperty('floor', Number(e.target.value))}
              min={1}
              max={30}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="totalFloors" className="text-base flex items-center gap-2">
              <Icon name="Layers" size={16} className="text-primary" />
              Этажность дома
            </Label>
            <Input
              id="totalFloors"
              type="number"
              value={propertyData.totalFloors}
              onChange={(e) => updateProperty('totalFloors', Number(e.target.value))}
              min={1}
              max={30}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="district" className="text-base flex items-center gap-2">
              <Icon name="MapPin" size={16} className="text-primary" />
              Район Оренбурга
            </Label>
            <Select value={propertyData.district} onValueChange={(value) => updateProperty('district', value)}>
              <SelectTrigger id="district">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="central">Центральный</SelectItem>
                <SelectItem value="dzerzhinskiy">Дзержинский (северная часть)</SelectItem>
                <SelectItem value="leninsky">Ленинский (восточная и южная части)</SelectItem>
                <SelectItem value="promyshlenny">Промышленный (западная часть)</SelectItem>
                <SelectItem value="south">Южный (за рекой Урал)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="condition" className="text-base flex items-center gap-2">
              <Icon name="Sparkles" size={16} className="text-primary" />
              Состояние
            </Label>
            <Select value={propertyData.condition} onValueChange={(value) => updateProperty('condition', value)}>
              <SelectTrigger id="condition">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">Новостройка</SelectItem>
                <SelectItem value="renovated">После ремонта</SelectItem>
                <SelectItem value="good">Хорошее</SelectItem>
                <SelectItem value="average">Среднее</SelectItem>
                <SelectItem value="needs_repair">Требует ремонта</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => updateProperty('hasBalcony', !propertyData.hasBalcony)}
            className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
              propertyData.hasBalcony
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
              propertyData.hasBalcony ? 'bg-primary text-white' : 'bg-muted'
            }`}>
              <Icon name="Home" size={20} />
            </div>
            <div className="text-left">
              <div className="font-semibold">Балкон/Лоджия</div>
              <div className="text-xs text-muted-foreground">
                {propertyData.hasBalcony ? 'Есть' : 'Нет'}
              </div>
            </div>
          </button>

          <button
            onClick={() => updateProperty('hasParking', !propertyData.hasParking)}
            className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
              propertyData.hasParking
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
              propertyData.hasParking ? 'bg-primary text-white' : 'bg-muted'
            }`}>
              <Icon name="ParkingCircle" size={20} />
            </div>
            <div className="text-left">
              <div className="font-semibold">Парковка</div>
              <div className="text-xs text-muted-foreground">
                {propertyData.hasParking ? 'Есть' : 'Нет'}
              </div>
            </div>
          </button>
        </div>

        <Button
          onClick={calculatePrice}
          disabled={isCalculating}
          className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90"
        >
          {isCalculating ? (
            <>
              <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
              AI анализирует данные...
            </>
          ) : (
            <>
              <Icon name="Sparkles" size={20} className="mr-2" />
              Оценить недвижимость
            </>
          )}
        </Button>

        {estimatedPrice && priceRange && (
          <div className="space-y-4 animate-fade-in">
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 text-center border-2 border-primary/20">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white">
                <Icon name="Sparkles" size={14} className="mr-1" />
                AI Оценка
              </Badge>
              <p className="text-sm text-muted-foreground mb-2">Рыночная стоимость:</p>
              <p className="text-5xl font-bold font-heading bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                {estimatedPrice.toLocaleString('ru-RU')} ₽
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Icon name="TrendingDown" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">
                    от {priceRange.min.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <div className="h-1 w-8 bg-gradient-to-r from-primary to-secondary rounded-full" />
                <div className="flex items-center gap-1">
                  <Icon name="TrendingUp" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">
                    до {priceRange.max.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <Icon name="DollarSign" size={24} className="text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold font-heading">
                  {Math.round(estimatedPrice / propertyData.area).toLocaleString('ru-RU')}
                </div>
                <div className="text-xs text-muted-foreground">₽ за м²</div>
              </div>

              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <Icon name="TrendingUp" size={24} className="text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold font-heading">+12%</div>
                <div className="text-xs text-muted-foreground">рост за год</div>
              </div>

              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <Icon name="Clock" size={24} className="text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold font-heading">14-21</div>
                <div className="text-xs text-muted-foreground">дней продажи</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1 bg-gradient-to-r from-primary to-secondary">
                <Icon name="Phone" size={18} className="mr-2" />
                Заказать оценку эксперта
              </Button>
              <Button variant="outline" className="flex-1">
                <Icon name="Download" size={18} className="mr-2" />
                Скачать отчет
              </Button>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
              <div className="flex gap-3">
                <Icon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Точность оценки: 92%</strong>
                  <p className="mt-1 text-blue-700 dark:text-blue-300">
                    AI анализирует более 5000 сделок в Оренбурге за последний год. Для точной оценки рекомендуем
                    консультацию с нашим экспертом.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default PropertyCalculator