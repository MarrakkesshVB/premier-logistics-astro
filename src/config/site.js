// src/config/site.js — Single source of truth: datos del cliente (NAP, URLs, geo, ofertas)
// Cambiás este archivo y todo el sitio (SEO, JSON-LD, canonical, og, footer) se actualiza solo.
export const site = {
  url: "https://premier-logistics-astro.pages.dev",
  name: "Premier Warehouse & Logistics Management",
  legalName: "Premier Warehouse & Logistics Management Corp.",
  tagline: "3PL warehousing in Doral, Miami: storage, cross dock, transload, pick & pack and e-commerce fulfillment in a 24/7 secured, woman-owned facility.",
  phone: "+1-305-877-5964",
  phoneDisplay: "305.877.5964",
  phoneAlt: "+1-305-429-5076",
  phoneAltDisplay: "305.429.5076",
  email: "info@mypremierwarehouse.com",
  priceRange: "$9.00 - $250.00",
  address: {
    street: "3600 NW 114th Ave, Unit A",
    city: "Doral",
    region: "FL",
    zip: "33178",
    country: "US",
  },
  geo: { lat: 25.8069047, lng: -80.3823901 },
  mapsUrl: "https://www.google.com/maps/place/Premier+Warehouse+Logistics/@25.8069095,-80.384965,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9bf29c6bbb123:0x29045021e26eb9a5!8m2!3d25.8069047!4d-80.3823901!16s%2Fg%2F11rctyrgfy",
  sameAsExtra: ["https://mypremierwarehouse.com/"],
  offers: [
    { price: "15.00", name: "Storage (per pallet per month)" },
    { price: "9.00", name: "Transload Same Day (per pallet)" },
    { price: "10.50", name: "Transload Next Day (per pallet)" },
    { price: "10.00", name: "Pick & Pack (per pallet)" },
    { price: "250.00", name: "Cross Dock (Mon-Fri)" },
  ],
};