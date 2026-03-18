import{Ab as b,Ca as g,Fb as n,Gb as e,Ib as P,Mb as l,Nb as p,Sa as r,Vb as m,Xb as t,Yb as u,Zb as d,_b as C,cc as h,dc as I,eb as _,tb as T,tc as y,ua as S,va as v,yb as x,zb as f}from"./chunk-UB4H3XYQ.js";import"./chunk-2NFLSA4Y.js";function w(o,s){if(o&1){let a=P();n(0,"button",11),l("click",function(){let c=S(a).$implicit,E=p();return v(E.selectedGeneric.set(c))}),t(1),e()}if(o&2){let a=s.$implicit,i=p();m("btn-active",i.selectedGeneric()===a),r(),d(" ",a," ")}}function D(o,s){if(o&1){let a=P();n(0,"button",11),l("click",function(){let c=S(a).$implicit,E=p();return v(E.selectedUtility.set(c))}),t(1),e()}if(o&2){let a=s.$implicit,i=p();m("btn-active",i.selectedUtility()===a),r(),d(" ",a," ")}}var O=class o{genericTypes=["Product","User","Order"];utilityTypes=["Partial","Pick","Omit","Record"];selectedGeneric=g("Product");currentState=g("loading");selectedUtility=g("Partial");genericResolution=y(()=>({Product:`{
  add(item: Product): void;
  getAll(): Product[];            // \u2192 { id, name, category, price, sustainabilityScore, description? }
  findById(pred: (item: Product) => boolean): Product | undefined;
}`,User:`{
  add(item: User): void;
  getAll(): User[];               // \u2192 { id, name, email }
  findById(pred: (item: User) => boolean): User | undefined;
}`,Order:`{
  add(item: Order): void;
  getAll(): Order[];              // \u2192 { id, productId, quantity, total }
  findById(pred: (item: Order) => boolean): Order | undefined;
}`})[this.selectedGeneric()]);stateTypeInfo=y(()=>{switch(this.currentState()){case"loading":return{typeName:"LoadingState",properties:"status",value:JSON.stringify({status:"loading"},null,2)};case"success":return{typeName:"SuccessState<Product[]>",properties:"status, data",value:JSON.stringify({status:"success",data:[{id:"1",name:"Organic Cotton T-Shirt",category:"Textiles",price:29.99,sustainabilityScore:85}]},null,2)};case"error":return{typeName:"ErrorState",properties:"status, message",value:JSON.stringify({status:"error",message:"Network timeout"},null,2)}}});utilityInfo=y(()=>({Partial:{expression:"Partial<Product>",result:`{
  id?: string;
  name?: string;
  category?: string;
  price?: number;
  sustainabilityScore?: number;
  description?: string;
}`,useCase:"Useful for update/patch operations where only some fields are provided."},Pick:{expression:"Pick<Product, 'name' | 'price'>",result:`{
  name: string;
  price: number;
}`,useCase:"Extract a subset of properties \u2014 great for DTOs or form models."},Omit:{expression:"Omit<Product, 'id'>",result:`{
  name: string;
  category: string;
  price: number;
  sustainabilityScore: number;
  description?: string;
}`,useCase:"Remove properties \u2014 perfect for creation payloads where the server assigns the id."},Record:{expression:"Record<string, Product>",result:`{
  [key: string]: Product;
}
// Example:
// { "1": { id: "1", name: "Organic Cotton T-Shirt", ... } }`,useCase:"Dictionary/map pattern \u2014 NgRx EntityState uses this internally."}})[this.selectedUtility()]);static \u0275fac=function(a){return new(a||o)};static \u0275cmp=_({type:o,selectors:[["ng-component"]],decls:90,vars:35,consts:[[1,"lab"],[1,"lab-header"],[1,"lab-section"],[1,"card"],[1,"explanation"],[1,"controls"],[1,"label"],[1,"btn",3,"btn-active"],[1,"output-log"],[1,"log-entry"],[1,"log-time"],[1,"btn",3,"click"],[1,"type-tag"]],template:function(a,i){a&1&&(n(0,"section",0)(1,"header",1)(2,"h2"),t(3,"\u{1F537} TypeScript Playground"),e(),n(4,"p"),t(5,"Advanced TypeScript concepts with interactive examples"),e()(),n(6,"div",2)(7,"h3"),t(8,"1. Generics \u2014 DataService<T>"),e(),n(9,"div",3)(10,"p",4),t(11," Generics let you write reusable code that works with any type while preserving type safety. "),e(),n(12,"pre")(13,"code"),t(14),e()(),n(15,"div",5)(16,"span",6),t(17,"Select type parameter:"),e(),f(18,w,2,3,"button",7,x),e(),n(20,"div",8)(21,"div",9)(22,"span",10),t(23,"Type:"),e(),t(24),e(),n(25,"div",9)(26,"span",10),t(27,"Resolved:"),e(),n(28,"pre")(29,"code"),t(30),e()()()()()(),n(31,"div",2)(32,"h3"),t(33,"2. Type Guards & Discriminated Unions"),e(),n(34,"div",3)(35,"pre")(36,"code"),t(37),e()(),n(38,"div",5)(39,"span",6),t(40,"Switch state:"),e(),n(41,"button",11),l("click",function(){return i.currentState.set("loading")}),t(42,"Loading"),e(),n(43,"button",11),l("click",function(){return i.currentState.set("success")}),t(44,"Success"),e(),n(45,"button",11),l("click",function(){return i.currentState.set("error")}),t(46,"Error"),e()(),n(47,"div",8)(48,"div",9)(49,"span",10),t(50,"Current type:"),e(),n(51,"span",12),t(52),e()(),n(53,"div",9)(54,"span",10),t(55,"Available properties:"),e(),t(56),e(),n(57,"div",9)(58,"span",10),t(59,"Value:"),e(),n(60,"pre")(61,"code"),t(62),e()()()()()(),n(63,"div",2)(64,"h3"),t(65,"3. Utility Types"),e(),n(66,"div",3)(67,"pre")(68,"code"),t(69),e()(),n(70,"div",5)(71,"span",6),t(72,"Apply utility type:"),e(),f(73,D,2,3,"button",7,x),e(),n(75,"div",8)(76,"div",9)(77,"span",10),t(78,"Expression:"),e(),t(79),e(),n(80,"div",9)(81,"span",10),t(82,"Result type:"),e(),n(83,"pre")(84,"code"),t(85),e()()(),n(86,"div",9)(87,"span",10),t(88,"Use case:"),e(),t(89),e()()()()()),a&2&&(r(14),h("class DataService<T> ","{",`
  private items: T[] = [];
  add(item: T): void `,"{"," this.items.push(item); ","}",`
  getAll(): T[] `,"{"," return [...this.items]; ","}",`
  findById(predicate: (item: T) => boolean): T | undefined `,"{",`
    return this.items.find(predicate);
  `,"}",`
`,"}"),r(4),b(i.genericTypes),r(6),d(" DataService<",i.selectedGeneric(),"> "),r(6),u(i.genericResolution()),r(7),I(["type LoadingState = ","{"," status: 'loading' ","}",`;
type SuccessState<T> = `,"{"," status: 'success'; data: T ","}",`;
type ErrorState = `,"{"," status: 'error'; message: string ","}",`;

type ApiResponse = LoadingState | SuccessState<Product[]> | ErrorState;

// The discriminant "status" narrows the type automatically
function handle(response: ApiResponse) `,"{",`
  switch (response.status) `,"{",`
    case 'loading': // response is LoadingState
    case 'success': // response is SuccessState<Product[]> \u2192 response.data
    case 'error':   // response is ErrorState \u2192 response.message
  `,"}",`
`,"}"]),r(4),m("btn-active",i.currentState()==="loading"),r(2),m("btn-active",i.currentState()==="success"),r(2),m("btn-active",i.currentState()==="error"),r(6),T("data-state",i.currentState()),r(),u(i.stateTypeInfo().typeName),r(4),d(" ",i.stateTypeInfo().properties," "),r(6),u(i.stateTypeInfo().value),r(7),C("interface Product ","{",`
  id: string;
  name: string;
  category: string;
  price: number;
  sustainabilityScore: number;
  description?: string;
`,"}"),r(4),b(i.utilityTypes),r(6),d(" ",i.utilityInfo().expression," "),r(6),u(i.utilityInfo().result),r(4),d(" ",i.utilityInfo().useCase," "))},styles:[".lab[_ngcontent-%COMP%]{max-width:860px;margin:0 auto}.explanation[_ngcontent-%COMP%]{color:var(--text-muted);font-size:.88rem;margin-bottom:.6rem}.controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;margin:.8rem 0}.controls[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-muted);margin-right:.25rem}.btn-active[_ngcontent-%COMP%]{border-color:var(--accent-blue)!important;background:#58a6ff26!important;color:var(--accent-blue)!important}.type-tag[_ngcontent-%COMP%]{font-weight:600;padding:.15em .5em;border-radius:4px;font-size:.85rem}.type-tag[data-state=loading][_ngcontent-%COMP%]{color:var(--accent-orange)}.type-tag[data-state=success][_ngcontent-%COMP%]{color:var(--accent-green)}.type-tag[data-state=error][_ngcontent-%COMP%]{color:var(--accent-red)}pre[_ngcontent-%COMP%]{margin:.4rem 0}"]})};export{O as TsPlaygroundComponent};
