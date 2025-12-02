import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'
import PropertyCalculator from '@/components/PropertyCalculator'

const CalculatorCTASection = () => {
  const [propertyPrice, setPropertyPrice] = useState(5000000)
  const [calculatedCommission, setCalculatedCommission] = useState(0)

  const calculateCommission = () => {
    const rate = propertyPrice < 3000000 ? 0.03 : propertyPrice < 10000000 ? 0.025 : 0.02
    setCalculatedCommission(propertyPrice * rate)
  }

  return (
    <>
      <section id="calculator" className="py-20">
        <div className="container max-w-6xl">
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary text-primary">
              Калькуляторы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Рассчитайте стоимость{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                услуг
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              AI оценка недвижимости и расчет комиссии
            </p>
          </div>

          <Tabs defaultValue="ai-valuation" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="ai-valuation" className="text-base">
                <Icon name="Sparkles" size={18} className="mr-2" />
                AI Оценка квартиры
              </TabsTrigger>
              <TabsTrigger value="commission" className="text-base">
                <Icon name="Calculator" size={18} className="mr-2" />
                Комиссия
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ai-valuation" className="animate-fade-in">
              <PropertyCalculator />
            </TabsContent>

            <TabsContent value="commission" className="animate-fade-in">
              <Card className="shadow-2xl border-2 animate-scale-in max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Калькулятор комиссии</CardTitle>
                  <CardDescription>
                    Введите стоимость недвижимости, и мы рассчитаем нашу комиссию
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-base">Стоимость недвижимости (₽)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={propertyPrice}
                      onChange={(e) => setPropertyPrice(Number(e.target.value))}
                      className="text-lg h-12"
                      placeholder="5000000"
                    />
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6 space-y-4">
                    <h3 className="font-semibold font-heading text-lg">Тарифы:</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-muted-foreground">До 3 млн ₽</span>
                        <Badge variant="outline">3%</Badge>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-muted-foreground">От 3 до 10 млн ₽</span>
                        <Badge variant="outline">2.5%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Свыше 10 млн ₽</span>
                        <Badge variant="outline">2%</Badge>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={calculateCommission}
                    className="w-full h-12 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  >
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать комиссию
                  </Button>

                  {calculatedCommission > 0 && (
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 text-center animate-scale-in border-2 border-primary/20">
                      <p className="text-sm text-muted-foreground mb-2">Наша комиссия составит:</p>
                      <p className="text-4xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {calculatedCommission.toLocaleString('ru-RU')} ₽
                      </p>
                      <p className="text-sm text-muted-foreground mt-4">
                        <Icon name="CheckCircle2" size={16} className="inline mr-1 text-primary" />
                        Включает полное юридическое сопровождение
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Готовы продать недвижимость быстро и выгодно?
            </h2>
            <p className="text-xl opacity-90">
              Оставьте заявку сейчас и получите бесплатную консультацию и оценку вашей недвижимости
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 min-w-[200px]">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 min-w-[200px] bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} />
                <span>Работаем 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={18} />
                <span>Оренбург, ул. Советская, 25</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={18} />
                <span>20 лет опыта</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CalculatorCTASection
