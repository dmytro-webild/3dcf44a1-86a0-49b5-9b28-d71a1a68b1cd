"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="grid"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Recensioni",
          id: "testimonials",
        },
        {
          name: "Contatti",
          id: "contact",
        },
      ]}
      brandName="Squisypizza"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Squisypizza"
      description="Artigianalità, freschezza e passione dal cuore di Anzio. Le tue pizze preferite, calde a casa tua."
      buttons={[
        {
          text: "Ordina Ora",
          href: "#contact",
        },
        {
          text: "Vedi Menù",
          href: "#menu",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-pizza-with-parmesan-cheese-tomatoes_23-2148753755.jpg",
          imageAlt: "artisanal pizza wooden table",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/national-qutab-with-sumakh-other-spices_114579-2393.jpg",
          imageAlt: "artisanal pizza wooden table",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-sliced-pizza-with-copy-space_23-2148753765.jpg",
          imageAlt: "artisanal pizza wooden table",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-italian-food-composition-with-clipboard-template_23-2148202557.jpg",
          imageAlt: "artisanal pizza wooden table",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-tasty-pizza-plate_23-2149298059.jpg",
          imageAlt: "artisanal pizza wooden table",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pizza-dough-with-wooden-board-word-written-flour_23-2148753788.jpg",
          imageAlt: "artisanal pizza wooden table",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Tradizione artigianale ad Anzio",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/homemade-seasonal-french-pear-cookies_166373-833.jpg",
          alt: "pizzeria interior rustic wood decor",
        },
      ]}
      buttons={[
        {
          text: "Scopri la nostra storia",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "Pizze",
          name: "Casareccia",
          price: "7,50 €",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-pizza-with-fresh-cheese_23-2150096956.jpg",
        },
        {
          id: "2",
          brand: "Pizze",
          name: "Allo Scoglio",
          price: "9,00 €",
          rating: 5,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/pizza-meat-lover-cheese_1388-646.jpg",
        },
        {
          id: "3",
          brand: "Fritti",
          name: "Supplì Artigianali",
          price: "2,00 €",
          rating: 5,
          reviewCount: "200",
          imageSrc: "http://img.b2bpic.net/free-photo/pizza-slices-cutting-board-flat-lay_23-2148574258.jpg",
        },
        {
          id: "4",
          brand: "Fritti",
          name: "Filetti di Baccalà",
          price: "3,50 €",
          rating: 4,
          reviewCount: "50",
          imageSrc: "http://img.b2bpic.net/free-photo/creative-arrangement-with-delicious-pizza_23-2148921351.jpg",
        },
        {
          id: "5",
          brand: "Pizze",
          name: "Calzone Farcito",
          price: "6,00 €",
          rating: 5,
          reviewCount: "90",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-pizza-indoors_23-2151231346.jpg",
        },
        {
          id: "6",
          brand: "Pizze",
          name: "Margherita",
          price: "5,00 €",
          rating: 5,
          reviewCount: "300",
          imageSrc: "http://img.b2bpic.net/free-photo/raw-pizza-oven_23-2147772089.jpg",
        },
      ]}
      title="Il Nostro Menù"
      description="Scopri le nostre specialità: pizze leggere, fritti dorati e calzoni farciti."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Impasto Leggero",
          description: "Lunga lievitazione per la massima digeribilità.",
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-pizza-table_23-2148570393.jpg",
        },
        {
          title: "Ingredienti Freschi",
          description: "Solo materie prime selezionate ogni giorno.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-dough-tomatoes-arrangement_23-2148601638.jpg",
        },
        {
          title: "Consegna Veloce",
          description: "Arriviamo ovunque ad Anzio e dintorni.",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-pizza-with-pepper-ingredients_23-2148765344.jpg",
        },
      ]}
      title="Perché Sceglierci"
      description="Genuinità e convenienza ad ogni morso."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Marco R.",
          role: "Cliente abituale",
          company: "Anzio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-couple-talking-while-eating-lunch-restaurant_637285-9017.jpg",
        },
        {
          id: "2",
          name: "Giulia S.",
          role: "Cliente",
          company: "Anzio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-friends-restaurant_23-2148395397.jpg",
        },
        {
          id: "3",
          name: "Luca V.",
          role: "Cliente",
          company: "Anzio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-attractive-woman-showing-thumb-up-outdoors_1262-12526.jpg",
        },
        {
          id: "4",
          name: "Anna P.",
          role: "Cliente",
          company: "Anzio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/monochrome-street-food-entertainment_23-2151542604.jpg",
        },
        {
          id: "5",
          name: "Sara D.",
          role: "Cliente",
          company: "Anzio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-paying-with-her-phone-via-contactless-payment-while-having-lunch-with-boyfriend-bar_637285-647.jpg",
        },
      ]}
      title="Cosa dicono i nostri clienti"
      description="Ecco cosa raccontano i nostri clienti fedeli sulla loro esperienza da Squisypizza."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",
          value: "10k+",
          title: "Pizze sfornate",
          description: "Passione ed impegno quotidiano.",
          imageSrc: "http://img.b2bpic.net/free-photo/seafood-cleaning-process-kitchen_23-2150171373.jpg",
        },
        {
          id: "2",
          value: "24/7",
          title: "Dedizione",
          description: "Sempre pronti per te.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-colorful-healthy-sweet-deserts-chia-puddings-made-almond-milk-blue-spirulina-extract-chia-seeds-pappaya-mango-jam-homemade-granola-wooden-table-kitchen-home_343596-1059.jpg",
        },
        {
          id: "3",
          value: "100%",
          title: "Ingredienti freschi",
          description: "Solo il meglio dal territorio.",
          imageSrc: "http://img.b2bpic.net/free-photo/putting-tomatoes-yogurt-red-basilic-leaves-together_114579-4561.jpg",
        },
      ]}
      title="I Nostri Numeri"
      description="La qualità certificata dai nostri affezionati clienti."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Orari di apertura?",
          content: "Siamo aperti tutti i giorni fino a mezzanotte!",
        },
        {
          id: "2",
          title: "Consegna a domicilio?",
          content: "Sì, copriamo ampie distanze su Anzio.",
        },
        {
          id: "3",
          title: "Opzioni menù?",
          content: "Pizza, calzoni, fritti e supplì artigianali.",
        },
      ]}
      mediaAnimation="slide-up"
      title="Domande Frequenti"
      description="Tutto quello che devi sapere sulla nostra pizzeria."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/neapolitan-pizza-with-tuna-cheese-arugula-basil-tomatoes-olives-sprinkled-with-cheese_78826-2269.jpg"
      imageAlt="Neapolitan pizza with tuna, cheese, arugula, basil, tomatoes, olives, sprinkled with cheese."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Contattaci"
      title="Ordina la tua pizza ora!"
      description="Via Aldobrandini 6, Anzio (RM). Chiama il 329 025 0967."
      buttons={[
        {
          text: "Chiama ora",
          href: "tel:3290250967",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Squisypizza",
          items: [
            {
              label: "Via Aldobrandini 6, Anzio",
              href: "#",
            },
            {
              label: "Tel: 329 025 0967",
              href: "tel:3290250967",
            },
          ],
        },
        {
          title: "Orari",
          items: [
            {
              label: "Tutti i giorni",
              href: "#",
            },
            {
              label: "Fino a mezzanotte",
              href: "#",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Facebook",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Squisypizza. Tutti i diritti riservati."
      bottomRightText="Pizzeria artigianale ad Anzio"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
