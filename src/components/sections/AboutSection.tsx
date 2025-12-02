import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const AboutSection = () => {
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
    <>
      <section id="about" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-primary rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <img
                src="https://cdn.poehali.dev/projects/0dde1022-a2dc-419f-a3e5-691cba9e9742/files/57d48ddc-d6dd-45c0-a7e1-ec0db52bdee3.jpg"
                alt="Команда РиэлтЭксперт"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="space-y-6 animate-fade-in order-1 lg:order-2">
              <Badge variant="outline" className="border-primary text-primary">
                О компании
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  20 лет
                </span>{' '}
                помогаем продавать недвижимость
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы - команда профессионалов с двадцатилетним опытом работы на рынке недвижимости Оренбурга. 
                За это время мы провели более 5000 успешных сделок и помогли тысячам семей найти свой идеальный дом 
                или выгодно продать недвижимость.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Trophy" className="text-primary" size={24} />
                    <span className="font-semibold text-lg">Лидеры рынка</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    №1 по количеству сделок в Оренбургской области
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" className="text-primary" size={24} />
                    <span className="font-semibold text-lg">Опытная команда</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    15+ сертифицированных специалистов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary text-primary">
              Отзывы клиентов
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Что говорят о{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                нас
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Реальные отзывы наших довольных клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-fade-in hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                      </div>
                    </div>
                    <Icon name="Quote" size={24} className="text-muted-foreground/30" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection
