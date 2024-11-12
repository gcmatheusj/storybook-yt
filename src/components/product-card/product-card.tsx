import { useState } from 'react'
import { Star, ShoppingCart } from 'lucide-react'

import { Button } from "../ui/button"

interface Product {
  id: string
  name: string
  price: number
  image: string
  rating: number
  inStock: boolean
}

export interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)

    setTimeout(() => setIsAdded(false), 2000)

    console.log(`Added product ${product.id} to cart`)
  }

  return (
    <div className="rounded-lg border bg-white w-full max-w-sm mx-auto overflow-hidden">
      <div className="p-0">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover "
          />
          {!product.inStock && (
            <div className="absolute rounded-full p-2 top-2 right-2 bg-red-500 text-xs font-semibold">
              Produto Esgotado
            </div>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="text-lg text-black font-semibold mb-2">{product.name}</div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-black">R$ {product.price.toFixed(2)}</span>
          <div className="flex items-center">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className='px-4 pb-4'>
        <Button 
          className="w-full" 
          onClick={handleAddToCart}
          disabled={!product.inStock || isAdded}
        >
          {isAdded ? (
            'Produto Adicionado'
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" /> Adicionar no Carrinho
            </>
          )}
        </Button>
      </div>
    </div>
  )
}