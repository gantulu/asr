import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import type { Product } from "@/data/products";
import { formatIDR } from "@/lib/utils";
import { useCart } from "@/store/cart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
export function ProductCard({product}:{product:Product}) {
 const add=useCart(state=>state.add); const [saved,setSaved]=useState(false);
 const discount=product.originalPrice?Math.round((1-product.price/product.originalPrice)*100):0;
 return <article className="group min-w-0">
  <div className="relative overflow-hidden rounded-2xl bg-mist">
   <Link to={"/product/"+product.id} aria-label={"Lihat "+product.name}><img src={product.image} alt={product.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"/></Link>
   {product.badge&&<Badge className="absolute left-2 top-2 bg-white/95">{product.badge}</Badge>}
   {discount>0&&<span className="absolute right-2 top-2 rounded-full bg-orange-600 px-2 py-1 text-[10px] font-bold text-white">-{discount}%</span>}
   <button type="button" onClick={()=>{setSaved(!saved);toast(saved?"Dihapus dari favorit":"Ditambahkan ke favorit")}} aria-label={saved?"Hapus dari favorit":"Tambah ke favorit"} aria-pressed={saved} className="absolute bottom-2 right-2 grid size-10 place-items-center rounded-full bg-white text-ink shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"><Heart size={17} className={saved?"fill-rose-500 text-rose-500":""}/></button>
  </div>
  <p className="mt-3 text-[11px] uppercase tracking-wide text-muted">{product.category}</p>
  <Link to={"/product/"+product.id} className="mt-1 block min-h-10 text-sm font-semibold text-ink hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">{product.name}</Link>
  <div className="mt-1 flex flex-wrap items-center gap-2"><span className="text-sm font-bold">{formatIDR(product.price)}</span>{product.originalPrice&&<span className="text-xs text-muted line-through">{formatIDR(product.originalPrice)}</span>}</div>
  <div className="mt-2 flex items-center gap-1 text-xs text-muted"><Star size={13} className="fill-amber-400 text-amber-500"/><span>{product.rating.toFixed(1)}</span></div>
  <Button size="sm" variant="outline" className="mt-3 w-full" onClick={()=>{add(product);toast.success("Produk ditambahkan ke keranjang")}}>Tambah ke keranjang</Button>
 </article>;
}
