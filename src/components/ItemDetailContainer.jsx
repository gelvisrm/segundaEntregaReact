import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const { productoId } = useParams()

  const productos = [
    {
      id: "001",
      categoria: "celulares",
      titulo: 'Iphone 13 Pro',
      descripcion: 'Grafito, 128 GB, 5G, 6.1" OLED Super Retina XDR ProMotion, Chip A15 Bionic, iOS',
      precio: 600000,
  },
  {
      id: "002",
      categoria: "celulares",
      titulo: 'Iphone 14 Plus',
      descripcion: 'Maravillosa joya de Apple con 128GB de almacenamiento interno y 6GB de memoria RAM que harán que tu smartphone funcione de la manera más fluida.',
      precio: 700000,
  },
  {
      id: "003",
      categoria: "celulares",
      titulo: 'Iphone 15 Pro Max',
      descripcion: ' Titanio Natural, 256 GB, 5G, 6.7" Pantalla Super Retina XDR, Chip A17 Bionic, iOS',
      precio: 1000000,
  },
  {
      id: "004",
      categoria: "accesorios",
      titulo: 'APPLE AirPods Pro (2023 2ª gen)',
      descripcion: 'Conexión USB-C, Inalámbricos, Bluetooth®, Estuche de carga inalámbrica, Chip H2, Siri, Blanco.',
      precio: 350000,
  },
  {
      id: "005",
      categoria: "accesorios",
      titulo: 'APPLE Adaptador de corriente',
      descripcion: 'Adaptador de corriente, USB-C de 20 W, Blanco',
      precio: 50000,
  },
  {
      id: "006",
      categoria: "accesorios",
      titulo: 'APPLE Funda transparente para iPhone 15 Pro con MagSafe',
      descripcion: 'Es delgada, liviana y se adapta bien a la mano: con esta funda desarrollada por Apple siempre podrás ver el color de tu iPhone 15 Pro.',
      precio: 35000,
  },
  {
      id: "007",
      categoria: "electronica",
      titulo: 'Apple MacBook Pro (2023)',
      descripcion: '14.2", Chip M3 Max, CPU de 14 núcleos, GPU de 30 núcleos, 36 GB RAM, SSD de 1TB, macOS, Negro espacial',
      precio: 1500000,
  },
  {
      id: "008",
      categoria: "electronica",
      titulo: 'APPLE MacBook Air (2020)',
      descripcion: '13.3" Retina, Chip M1 de Apple, 8 GB, 256 GB SSD, MacOS, Teclado Magic Keyboard Touch ID, Plata',
      precio: 1000000,
  },
  {
      id: "009",
      categoria: "electronica",
      titulo: 'APPLE iMac (2021)',
      descripcion: '24" Retina 4.5K, Chip M1 de Apple, 8 GB RAM, 512 GB SSD, macOS Big Sur, Teclado Magic Keyboard con Touch ID, Plata',
      precio: 1300000,
  },
  {
      id: "010",
      categoria: "videojuegos",
      titulo: 'Consola - Nintendo Switch OLED, 7", Joy-Con, 64 GB, Blanco',
      descripcion: 'Disfruta de los juegos en el formato de la consola Nintendo Switch OLED en color blanco.',
      precio: 500000,
  },
  {
      id: "011",
      categoria: "videojuegos",
      titulo: 'Consola - Sony PlayStation 5 Slim Standard, 1 TB SSD, 4K, 1 mando, Chasis D, Blanco',
      descripcion: 'La consola PS5® Standard abre nuevas posibilidades de juego nunca antes imaginadas en formato Slim.',
      precio: 800000,
  },
  {
      id: "012",
      categoria: "videojuegos",
      titulo: 'Consola - Microsoft Xbox Series X, 1 TB SSD, Negro',
      descripcion: 'En el corazón de Series X se incluye Xbox Velocity Architecture, que combina un disco SSD personalizado con software integrado para ofrecer un juego agilizado más rápido.',
      precio: 3000000,
  }
  ]

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject("Sin resultados")
    }
  })

  mostrarProductos
    .then((resultado) => { })
    .catch((error) => {
      console.log(error)
    })


  const productoFiltrado = productos.find((producto) => producto.id == productoId)

  return (
    <div>
      <ItemDetail
        producto={productoFiltrado}
      />
    </div>
  )
}

export default ItemDetailContainer