import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const ServicesSection = () => {
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

  return (
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
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
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
  )
}

export default ServicesSection
