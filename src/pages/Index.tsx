import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'
import PropertyCalculator from '@/components/PropertyCalculator'

const Index = () => {
  const [propertyPrice, setPropertyPrice] = useState(5000000)
  const [calculatedCommission, setCalculatedCommission] = useState(0)

  const calculateCommission = () => {
    const rate = propertyPrice < 3000000 ? 0.03 : propertyPrice < 10000000 ? 0.025 : 0.02
    setCalculatedCommission(propertyPrice * rate)
  }

  const services = [
    {
      icon: 'Zap',
      title: 'Экспресс-продажа за 21 день',
      description: 'Гарантируем продажу вашей недвижимости за 3 недели или вернем деньги',
      features: ['Профессиональная фотосессия', 'Активное продвижение', 'Показы 24/7', 'Юридическое сопровождение']
    },
    {
      icon: 'Shield',
      title: 'Полная юридическая защита',
      description: 'Команда опытных юристов проверит все документы и обезопасит сделку',
      features: ['Проверка документов', 'Сопровождение сделки', 'Защита от рисков', 'Страхование сделки']
    },
    {
      icon: 'Users',
      title: 'Полное сопровождение',
      description: 'Берем на себя все заботы от оценки до получения денег на счет',
      features: ['Оценка недвижимости', 'Подготовка документов', 'Организация показов', 'Поддержка 24/7']
    }
  ]

  const testimonials = [
    {
      name: 'Мария Петрова',
      text: 'Продали квартиру за 18 дней! Профессионализм на высшем уровне. Все взяли на себя, мне только осталось получить деньги.',
      rating: 5,
      date: 'Ноябрь 2024'
    },
    {
      name: 'Александр Иванов',
      text: 'Работал с разными агентствами, но здесь реально другой уровень. Комиссия ниже, а качество работы лучше. Рекомендую!',
      rating: 5,
      date: 'Октябрь 2024'
    },
    {
      name: 'Елена Смирнова',
      text: '20 лет на рынке - это показатель! Юристы проверили все до мелочей, сделка прошла безопасно и быстро.',
      rating: 5,
      date: 'Сентябрь 2024'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="Home" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                РиэлтЭксперт
              </h1>
              <p className="text-xs text-muted-foreground">№1 в Оренбурге</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              О компании
            </a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="#calculator" className="text-sm font-medium hover:text-primary transition-colors">
              Калькулятор
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-fade-in" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                <Icon name="Award" size={14} className="mr-1" />
                20 лет на рынке Оренбурга
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
                Продадим вашу недвижимость{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  за 21 день
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Полное юридическое сопровождение, минимальные комиссии и гарантия результата от агентства №1 в Оренбурге
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Продать недвижимость
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать комиссию
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    20+
                  </div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    5000+
                  </div>
                  <div className="text-sm text-muted-foreground">сделок</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    98%
                  </div>
                  <div className="text-sm text-muted-foreground">довольных</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <img
                src="https://cdn.poehali.dev/projects/0dde1022-a2dc-419f-a3e5-691cba9e9742/files/9ea2b3b4-fa13-4594-941e-cc54f3dc34ed.jpg"
                alt="Офис РиэлтЭксперт"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary text-primary">
              Наши услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Почему выбирают{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                нас?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональный подход к каждой сделке с гарантией результата
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-primary rounded-3xl blur-2xl opacity-20" />
              <img
                src="https://cdn.poehali.dev/projects/0dde1022-a2dc-419f-a3e5-691cba9e9742/files/c2011e49-3834-45b1-b558-30d098262d48.jpg"
                alt="Довольные клиенты"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <Badge variant="outline" className="border-secondary text-secondary">
                О компании
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                20 лет помогаем людям{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  в Оренбурге
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы — агентство недвижимости №1 в Оренбурге с двадцатилетним опытом. За это время мы провели более 5000 успешных сделок и помогли тысячам семей найти дом мечты или выгодно продать недвижимость.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
                  <Icon name="Shield" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold font-heading mb-1">Полная юридическая защита</h3>
                    <p className="text-sm text-muted-foreground">
                      Команда опытных юристов проверит все документы и обезопасит вашу сделку
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-secondary/5 rounded-xl">
                  <Icon name="TrendingDown" size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold font-heading mb-1">Низкие комиссии</h3>
                    <p className="text-sm text-muted-foreground">
                      Одни из самых выгодных условий на рынке — от 2% за сделку
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-xl">
                  <Icon name="Clock" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold font-heading mb-1">Экспресс-продажа за 21 день</h3>
                    <p className="text-sm text-muted-foreground">
                      Уникальная программа быстрой продажи с гарантией результата
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-accent text-accent">
              Отзывы клиентов
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Что говорят о нас{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                клиенты
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-fade-in hover:shadow-xl transition-shadow"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <footer className="py-12 bg-foreground text-background">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Home" className="text-white" size={20} />
                </div>
                <h3 className="font-bold font-heading text-lg">РиэлтЭксперт</h3>
              </div>
              <p className="text-sm opacity-75">
                Агентство недвижимости №1 в Оренбурге
              </p>
            </div>
            <div>
              <h4 className="font-semibold font-heading mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Продажа квартир</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Продажа домов</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Коммерческая недвижимость</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Юридические услуги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-heading mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li><a href="#" className="hover:opacity-100 transition-opacity">О нас</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Наша команда</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Отзывы</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-heading mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm opacity-75">
                <li className="flex items-start gap-2">
                  <Icon name="Phone" size={16} className="mt-0.5" />
                  <span>+7 (3532) 123-456</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Mail" size={16} className="mt-0.5" />
                  <span>info@rieltexpert.ru</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-0.5" />
                  <span>г. Оренбург, ул. Советская, 25</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 pt-8 text-center text-sm opacity-75">
            <p>© 2024 РиэлтЭксперт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index