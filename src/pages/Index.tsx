import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Artwork {
  id: string;
  title: string;
  artist: string;
  price: string;
  image: string;
  description: string;
  status: 'available' | 'reserved' | 'sold';
  dimensions: string;
  year: string;
}

const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Утренние грёзы',
    artist: 'Анна Петрова',
    price: '85 000 ₽',
    image: '/img/52f4ec75-eb34-4f0f-b942-f627f1b2c412.jpg',
    description: 'Импрессионистическая работа, выполненная в нежных пастельных тонах. Передаёт атмосферу тихого утра в горах.',
    status: 'available',
    dimensions: '70×50 см',
    year: '2024'
  },
  {
    id: '2',
    title: 'Геометрия чувств',
    artist: 'Михаил Волков',
    price: '120 000 ₽',
    image: '/img/4992968f-dd89-41d2-b35e-3653a727bdd9.jpg',
    description: 'Современная абстракция, исследующая взаимосвязь формы и эмоций через минималистичную композицию.',
    status: 'available',
    dimensions: '80×60 см',
    year: '2024'
  },
  {
    id: '3',
    title: 'Классическая элегантность',
    artist: 'Елена Смирнова',
    price: '95 000 ₽',
    image: '/img/eae12344-2998-4c39-a9cc-69e16aeef240.jpg',
    description: 'Изысканный натюрморт в традициях старых мастеров, выполненный с особым вниманием к деталям.',
    status: 'reserved',
    dimensions: '60×80 см',
    year: '2023'
  }
];

const exhibitions = [
  {
    title: 'Современные грани',
    date: '15 февраля - 20 марта 2024',
    description: 'Выставка современного искусства молодых художников'
  },
  {
    title: 'Классическое наследие',
    date: '1 апреля - 15 мая 2024',
    description: 'Ретроспектива классической живописи XX века'
  }
];

const artists = [
  {
    name: 'Анна Петрова',
    bio: 'Художник-импрессионист, работает в технике масляной живописи',
    works: 12
  },
  {
    name: 'Михаил Волков',
    bio: 'Современный абстракционист, исследует минимализм',
    works: 8
  },
  {
    name: 'Елена Смирнова',
    bio: 'Мастер классического натюрморта и портрета',
    works: 15
  }
];

export default function Index() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [reservationForm, setReservationForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleReservation = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  const submitReservation = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика отправки формы резервации
    alert(`Заявка на резервацию "${selectedArtwork?.title}" отправлена!`);
    setReservationForm({ name: '', email: '', phone: '', message: '' });
    setSelectedArtwork(null);
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-display font-semibold text-primary">Галерея Искусств</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#hero" className="text-foreground/80 hover:text-primary transition-colors">Главная</a>
              <a href="#gallery" className="text-foreground/80 hover:text-primary transition-colors">Галерея</a>
              <a href="#exhibitions" className="text-foreground/80 hover:text-primary transition-colors">Выставки</a>
              <a href="#artists" className="text-foreground/80 hover:text-primary transition-colors">Художники</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-6xl md:text-7xl font-display font-light text-primary mb-6 leading-tight">
            Мир прекрасного
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Откройте для себя уникальные произведения искусства от талантливых художников. 
            Каждая работа — это отражение души и мастерства автора.
          </p>
          <Button size="lg" className="rounded-2xl px-8 py-6 text-lg">
            <Icon name="Palette" className="mr-2" size={20} />
            Посмотреть галерею
          </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-light text-primary mb-4">Галерея</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Коллекция избранных произведений искусства доступных для приобретения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <Card key={artwork.id} className="overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-medium text-xl text-primary mb-1">{artwork.title}</h3>
                      <p className="text-muted-foreground">{artwork.artist}</p>
                    </div>
                    <Badge 
                      variant={artwork.status === 'available' ? 'default' : artwork.status === 'reserved' ? 'secondary' : 'destructive'}
                      className="rounded-full"
                    >
                      {artwork.status === 'available' ? 'Доступно' : 
                       artwork.status === 'reserved' ? 'Резерв' : 'Продано'}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{artwork.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{artwork.dimensions}</span>
                    <span>{artwork.year}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-display font-semibold text-primary">{artwork.price}</span>
                    {artwork.status === 'available' && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="default" 
                            size="sm" 
                            className="rounded-2xl"
                            onClick={() => handleReservation(artwork)}
                          >
                            Резерв
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="rounded-3xl">
                          <DialogHeader>
                            <DialogTitle className="font-display text-2xl text-primary">
                              Резервация: {artwork.title}
                            </DialogTitle>
                          </DialogHeader>
                          <form onSubmit={submitReservation} className="space-y-4">
                            <div>
                              <Label htmlFor="name">Имя</Label>
                              <Input
                                id="name"
                                value={reservationForm.name}
                                onChange={(e) => setReservationForm({...reservationForm, name: e.target.value})}
                                className="rounded-2xl"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                type="email"
                                value={reservationForm.email}
                                onChange={(e) => setReservationForm({...reservationForm, email: e.target.value})}
                                className="rounded-2xl"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Телефон</Label>
                              <Input
                                id="phone"
                                value={reservationForm.phone}
                                onChange={(e) => setReservationForm({...reservationForm, phone: e.target.value})}
                                className="rounded-2xl"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="message">Сообщение</Label>
                              <Textarea
                                id="message"
                                value={reservationForm.message}
                                onChange={(e) => setReservationForm({...reservationForm, message: e.target.value})}
                                className="rounded-2xl"
                                placeholder="Дополнительная информация..."
                              />
                            </div>
                            <Button type="submit" className="w-full rounded-2xl">
                              Отправить заявку
                            </Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      <section id="exhibitions" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-light text-primary mb-4">Выставки</h2>
            <p className="text-lg text-muted-foreground">Актуальные и предстоящие выставки</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {exhibitions.map((exhibition, index) => (
              <Card key={index} className="rounded-3xl border-0 shadow-lg bg-card">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-primary">{exhibition.title}</CardTitle>
                  <p className="text-muted-foreground">{exhibition.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exhibition.description}</p>
                  <Button variant="outline" className="mt-4 rounded-2xl">
                    <Icon name="Calendar" className="mr-2" size={16} />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-light text-primary mb-4">Художники</h2>
            <p className="text-lg text-muted-foreground">Познакомьтесь с талантливыми авторами</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <Card key={index} className="rounded-3xl border-0 shadow-lg bg-card text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-primary mb-2">{artist.name}</h3>
                  <p className="text-muted-foreground mb-4">{artist.bio}</p>
                  <Badge variant="secondary" className="rounded-full">
                    {artist.works} работ
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-light text-primary mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Свяжитесь с нами для консультации</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-primary">Адрес</h4>
                  <p className="text-muted-foreground">Москва, ул. Арбат, д. 15</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-primary">Телефон</h4>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-primary">Email</h4>
                  <p className="text-muted-foreground">info@gallery-art.ru</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-primary">Режим работы</h4>
                  <p className="text-muted-foreground">Пн-Пт: 10:00-20:00<br />Сб-Вс: 11:00-19:00</p>
                </div>
              </div>
            </div>

            <Card className="rounded-3xl border-0 shadow-lg bg-card">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl text-primary mb-6">Написать нам</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" className="rounded-2xl" />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" className="rounded-2xl" />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Сообщение</Label>
                    <Textarea id="contact-message" className="rounded-2xl h-32" />
                  </div>
                  <Button className="w-full rounded-2xl">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="font-display text-2xl text-primary mb-4">Галерея Искусств</h3>
          <p className="text-muted-foreground mb-6">
            Место, где встречаются красота и вдохновение
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" className="rounded-2xl">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-2xl">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-2xl">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}