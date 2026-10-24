import { create } from "zustand";
import type { Product } from "@/data/products";
type Line = { product: Product; quantity: number };
type CartState = { items: Line[]; add:(product:Product)=>void; remove:(id:string)=>void; setQuantity:(id:string,quantity:number)=>void; count:()=>number; subtotal:()=>number; clear:()=>void };
export const useCart = create<CartState>((set,get)=>({
 items:[],
 add:(product)=>set(state=>{const line=state.items.find(item=>item.product.id===product.id);return {items:line?state.items.map(item=>item.product.id===product.id?{...item,quantity:item.quantity+1}:item):[...state.items,{product,quantity:1}]} }),
 remove:(id)=>set(state=>({items:state.items.filter(item=>item.product.id!==id)})),
 setQuantity:(id,quantity)=>set(state=>({items:quantity<1?state.items.filter(item=>item.product.id!==id):state.items.map(item=>item.product.id===id?{...item,quantity:Math.min(99,quantity)}:item)})),
 count:()=>get().items.reduce((sum,item)=>sum+item.quantity,0),
 subtotal:()=>get().items.reduce((sum,item)=>sum+item.product.price*item.quantity,0),
 clear:()=>set({items:[]})
}));
