import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems = [
    {
      image: 'https://cdn.poehali.dev/projects/d6c97204-1880-4bf8-8371-f22dcfc92ae1/files/9f8d33b7-f510-47de-8192-96004e784db7.jpg',
      title: 'День Знаний 2025',
      category: 'Школьные события',
      link: 'https://vk.com/wall-224875668_178'
    },
    {
      image: 'https://cdn.poehali.dev/projects/d6c97204-1880-4bf8-8371-f22dcfc92ae1/files/85391844-702f-4afb-a09e-ead11ad7073d.jpg',
      title: 'День Победы 2025',
      category: 'Мероприятия',
      link: ''
    },
    {
      image: 'https://cdn.poehali.dev/projects/d6c97204-1880-4bf8-8371-f22dcfc92ae1/files/5a3081f2-eaf5-40c0-bf85-15d7d18b318b.jpg',
      title: 'Работа редакции',
      category: 'За кадром',
      link: ''
    }
  ];

  const newsItems = [
    {
      title: 'Запуск нового медиапроекта',
      date: '15 октября 2024',
      excerpt: 'Школьный взгляд представляет новую серию видеорепортажей о жизни нашей школы',
      image: 'https://cdn.poehali.dev/projects/d6c97204-1880-4bf8-8371-f22dcfc92ae1/files/9f8d33b7-f510-47de-8192-96004e784db7.jpg'
    },
    {
      title: 'Интервью с директором',
      date: 'ЗАПЛАНИРОВАНО',
      excerpt: 'Эксклюзивное интервью о планах развития школы и новых образовательных инициативах',
      image: 'https://cdn.poehali.dev/projects/d6c97204-1880-4bf8-8371-f22dcfc92ae1/files/85391844-702f-4afb-a09e-ead11ad7073d.jpg'
    },
    {
      title: 'Новогодние мероприятия в МОАУ «СОШ №48»',
      date: 'ЗАПЛАНИРОВАНО',
      excerpt: 'Готовимся к волшебным новогодним праздникам: утренники для младших классов, дискотека для старшеклассников и праздничный концерт',
      image: 'https://cdn.poehali.dev/projects/d6c97204-1880-4bf8-8371-f22dcfc92ae1/files/5a3081f2-eaf5-40c0-bf85-15d7d18b318b.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Camera" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Школьный взгляд
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('news')}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === 'news' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Новости
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Контакты
              </button>
              <Button 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                onClick={() => window.open('https://vk.com/club224875668', '_blank')}
              >
                Наша группа VK
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold">Школьное СМИ</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Смотрим на мир
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  своими глазами
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Фотографируем и снимаем школьные мероприятия, рассказываем о событиях,
                создаём интересный контент для нашего сообщества
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => scrollToSection('news')}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  size="lg"
                >
                  Смотреть работы
                </Button>
                <Button 
                  onClick={() => scrollToSection('contacts')}
                  variant="outline" 
                  size="lg"
                >
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/d6c97204-1880-4bf8-8371-f22dcfc92ae1/files/9f8d33b7-f510-47de-8192-96004e784db7.jpg"
                alt="Школьный взгляд"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Наши работы
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  {item.link ? (
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-primary"
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      Смотреть запись трансляции
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  ) : (
                    <Button variant="ghost" className="p-0 h-auto text-muted-foreground" disabled>
                      Смотреть запись трансляции
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Последние новости</h3>
            <p className="text-muted-foreground text-lg">
              Следите за событиями нашей школы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span>{news.date}</span>
                  </div>
                  <h4 className="text-xl font-semibold">{news.title}</h4>
                  <p className="text-muted-foreground">{news.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h3>
            <p className="text-muted-foreground text-lg">
              Есть идеи для сотрудничества или хотите присоединиться к команде?
            </p>
          </div>
          <Card className="p-8 animate-scale-in">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Email</h5>
                    <p className="text-muted-foreground">vhplaycool@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">VK Сообщество</h5>
                    <a href="https://vk.com/club224875668" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vk.com/club224875668</a>
                  </div>
                </div>

              </div>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Textarea placeholder="Сообщение" rows={4} />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Camera" size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg">Школьный взгляд</span>
          </div>
          <p className="text-background/70 mb-4">
            Школьное СМИ и медиацентр
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={20} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Mail" size={20} />
            </a>
          </div>
          <p className="text-sm text-background/50">
            © 2024 Школьный взгляд. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;