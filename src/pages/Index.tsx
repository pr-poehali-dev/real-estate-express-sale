import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import CalculatorCTASection from '@/components/sections/CalculatorCTASection'

const Index = () => {
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

      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CalculatorCTASection />
    </div>
  )
}

export default Index
