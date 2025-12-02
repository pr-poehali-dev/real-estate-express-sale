import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const HeroSection = () => {
  return (
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
              src="https://cdn.poehali.dev/files/7c2e3c7e-594d-4bb6-b444-3132ee4df650.png"
              alt="Команда РиэлтЭксперт"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection