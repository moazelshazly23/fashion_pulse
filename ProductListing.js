import { useState } from 'react'
import { Star, ShoppingCart, Heart, Search, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

const products = [
  { id: 1, name: "قميص كلاسيكي", price: 499.99, discountPrice: 399.99, rating: 4.5, image: "/placeholder.svg?height=200&width=200", colors: ["أبيض", "أسود", "أزرق"] },
  { id: 2, name: "بنطلون جينز", price: 699.99, rating: 4.2, image: "/placeholder.svg?height=200&width=200", colors: ["أزرق", "أسود"] },
  { id: 3, name: "حذاء رياضي", price: 1299.99, discountPrice: 999.99, rating: 4.8, image: "/placeholder.svg?height=200&width=200", colors: ["أبيض", "أسود", "أحمر"] },
  { id: 4, name: "جاكيت جلد", price: 2499.99, rating: 4.6, image: "/placeholder.svg?height=200&width=200", colors: ["أسود", "بني"] },
  { id: 5, name: "فستان سهرة", price: 1999.99, discountPrice: 1599.99, rating: 4.7, image: "/placeholder.svg?height=200&width=200", colors: ["أحمر", "أسود", "ذهبي"] },
  { id: 6, name: "قميص رياضي", price: 399.99, rating: 4.3, image: "/placeholder.svg?height=200&width=200", colors: ["أبيض", "رمادي", "أزرق"] },
]

export default function ProductListing() {
  const [priceRange, setPriceRange] = useState([0, 3000])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-brown-900 to-white">
      <header className="bg-brown-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Fashion Pulse</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost"><ShoppingCart /></Button>
            <Button variant="ghost">تسجيل الدخول</Button>
          </div>
        </div>
      </header>

      <nav className="bg-brown-700 text-white p-2">
        <div className="container mx-auto flex justify-between items-center">
          <Button variant="ghost"><Menu className="mr-2" />الفئات</Button>
          <div className="flex-1 mx-4">
            <div className="relative">
              <Input type="search" placeholder="ابحث عن منتجات..." className="w-full pl-10 bg-white text-black" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <Select>
            <option>الأكثر مبيعًا</option>
            <option>الأحدث</option>
            <option>السعر: من الأقل للأعلى</option>
            <option>السعر: من الأعلى للأقل</option>
          </Select>
        </div>
      </nav>

      <main className="container mx-auto p-4 flex">
        <aside  className="w-64 bg-white p-4 rounded-lg shadow mr-4">
          <h2 className="text-lg font-semibold mb-4">تصفية النتائج</h2>
          <div className="mb-4">
            <h3 className="font-medium mb-2">نطاق السعر</h3>
            <Slider
              min={0}
              max={3000}
              step={100}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-2"
            />
            <div className="flex justify-between text-sm">
              <span>{priceRange[0]} ج.م</span>
              <span>{priceRange[1]} ج.م</span>
            </div>
          </div>
          {/* يمكن إضافة المزيد من خيارات التصفية هنا */}
        </aside>

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {product.colors.map((color, index) => (
                      <Badge key={index} variant="secondary">{color}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      {product.discountPrice ? (
                        <>
                          <span className="text-lg font-bold text-red-600">{product.discountPrice.toFixed(2)} ج.م</span>
                          <span className="text-sm text-gray-500 line-through ml-2">{product.price.toFixed(2)} ج.م</span>
                        </>
                      ) : (
                        <span className="text-lg font-bold">{product.price.toFixed(2)} ج.م</span>
                      )}
                    </div>
                    <Button size="sm"><ShoppingCart className="w-4 h-4 mr-2" />أضف للسلة</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}