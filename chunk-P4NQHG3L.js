import{a as s}from"./chunk-B3USI2EE.js";import"./chunk-L5YHS2GO.js";import{Cb as n,Db as t,Xb as e,eb as a}from"./chunk-UB4H3XYQ.js";import"./chunk-2NFLSA4Y.js";var o=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=a({type:r,selectors:[["app-ts-learn"]],decls:90,vars:0,consts:[["appAutoGlossary","",1,"cards"],["id","1-generics",1,"card"],[1,"code-ref"],["id","2-type-guards",1,"card"],["id","3-discriminated-unions",1,"card"],["id","4-utility-types",1,"card"]],template:function(i,c){i&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),e(3,"\u{1F537} 1. Generics"),t(),n(4,"p"),e(5," Los generics permiten crear componentes reutilizables que trabajan con cualquier tipo. En lugar de usar "),n(6,"code"),e(7,"any"),t(),e(8,", los generics preservan la informaci\xF3n de tipos, dando autocompletado y verificaci\xF3n en tiempo de compilaci\xF3n. "),t(),n(9,"pre")(10,"code"),e(11,`class DataService<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items];
  }

  getById(id: string): T | undefined {
    return this.items.find(
      (item) => (item as any).id === id
    );
  }
}

// Uso con constraint
interface HasId { id: string; }

class BetterService<T extends HasId> {
  private items: T[] = [];

  getById(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

// Generic con tipo por defecto
class Cache<T = string> {
  private store = new Map<string, T>();

  set(key: string, value: T): void {
    this.store.set(key, value);
  }

  get(key: string): T | undefined {
    return this.store.get(key);
  }
}

const stringCache = new Cache();        // Cache<string>
const numberCache = new Cache<number>(); // Cache<number>`),t()(),n(12,"div",2),e(13," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(14,"ul")(15,"li")(16,"code"),e(17,"features/typescript-lab/ts-playground.ts"),t(),e(18," \u2014 Generic interfaces y funciones"),t(),n(19,"li")(20,"code"),e(21,"features/ngrx-lab/store/product.reducer.ts"),t(),e(22," \u2014 EntityAdapter<Product>"),t(),n(23,"li")(24,"code"),e(25,"shared/models/product.model.ts"),t(),e(26," \u2014 AsyncState<T> gen\xE9rico"),t()()()(),n(27,"div",3)(28,"h3"),e(29,"\u{1F537} 2. Type Guards"),t(),n(30,"p"),e(31," Los type guards permiten estrechar (narrow) el tipo de una variable dentro de un bloque condicional. TypeScript usa el keyword "),n(32,"code"),e(33,"is"),t(),e(34,", "),n(35,"code"),e(36,"instanceof"),t(),e(37,", "),n(38,"code"),e(39,"in"),t(),e(40," y "),n(41,"code"),e(42,"typeof"),t(),e(43," para inferir tipos m\xE1s espec\xEDficos autom\xE1ticamente. "),t(),n(44,"pre")(45,"code"),e(46,`interface Product {
  id: string;
  name: string;
  price: number;
}

// Type guard con 'is' keyword
function isProduct(value: unknown): value is Product {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value &&
    'price' in value
  );
}

// Uso seguro
function processData(data: unknown): string {
  if (isProduct(data)) {
    // TS sabe que data es Product aqu\xED
    return \\\`\${data.name}: $\${data.price}\\\`;
  }
  return 'Dato no v\xE1lido';
}

// instanceof guard
class ApiError extends Error {
  constructor(public code: number, message: string) {
    super(message);
  }
}

function handleError(err: unknown): string {
  if (err instanceof ApiError) {
    return \\\`Error \${err.code}: \${err.message}\\\`;
  }
  if (err instanceof Error) {
    return err.message;
  }
  return 'Error desconocido';
}

// 'in' operator guard
interface Cat { meow(): void; }
interface Dog { bark(): void; }

function makeSound(animal: Cat | Dog): void {
  if ('meow' in animal) {
    animal.meow(); // TS sabe que es Cat
  } else {
    animal.bark(); // TS sabe que es Dog
  }
}`),t()(),n(47,"div",2),e(48," \u{1F4C2} "),n(49,"code"),e(50,"features/typescript-lab/ts-playground.ts"),t(),e(51," \u2014 Type Guards con is, instanceof, in operator "),t()(),n(52,"div",4)(53,"h3"),e(54,"\u{1F537} 3. Discriminated Unions"),t(),n(55,"p"),e(56," Las discriminated unions usan un campo literal com\xFAn (discriminante) para que TypeScript pueda estrechar el tipo en cada rama de un "),n(57,"code"),e(58,"switch"),t(),e(59," o "),n(60,"code"),e(61,"if"),t(),e(62,". Es el patr\xF3n ideal para modelar estados de una aplicaci\xF3n. "),t(),n(63,"pre")(64,"code"),e(65,`type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

function handleState<T>(state: AsyncState<T>): string | T {
  switch (state.status) {
    case 'idle':
      return 'Esperando...';
    case 'loading':
      return 'Cargando...';
    case 'success':
      return state.data;    // TS sabe que data existe
    case 'error':
      return state.message; // TS sabe que message existe
  }
}

// Verificaci\xF3n exhaustiva con never
function assertNever(value: never): never {
  throw new Error(\\\`Valor inesperado: \${value}\\\`);
}

function render<T>(state: AsyncState<T>): string {
  switch (state.status) {
    case 'idle':    return '\u23F8 Idle';
    case 'loading': return '\u23F3 Loading...';
    case 'success': return '\u2705 Done';
    case 'error':   return \\\`\u274C \${state.message}\\\`;
    default:        return assertNever(state);
  }
}

// Ejemplo pr\xE1ctico: acciones de un reducer
type Action =
  | { type: 'ADD_ITEM'; payload: string }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'CLEAR' };

function reducer(state: string[], action: Action): string[] {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter((_, i) => i !== action.payload);
    case 'CLEAR':
      return [];
  }
}`),t()(),n(66,"div",2),e(67," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(68,"ul")(69,"li")(70,"code"),e(71,"features/typescript-lab/ts-playground.ts"),t(),e(72," \u2014 ApiResponse con status discriminante"),t(),n(73,"li")(74,"code"),e(75,"shared/models/product.model.ts"),t(),e(76," \u2014 AsyncState con status: idle | loading | success | error"),t()()()(),n(77,"div",5)(78,"h3"),e(79,"\u{1F537} 4. Utility Types"),t(),n(80,"p"),e(81," TypeScript incluye utility types integrados que transforman tipos existentes. Son esenciales para derivar tipos sin duplicar definiciones, manteniendo el c\xF3digo DRY y type-safe. "),t(),n(82,"pre")(83,"code"),e(84,`interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

// Omit \u2014 quita propiedades
type ProductCreate = Omit<Product, 'id'>;
// { name: string; price: number; category: string }

// Pick \u2014 selecciona propiedades
type ProductSummary = Pick<Product, 'name' | 'price'>;
// { name: string; price: number }

// Record \u2014 mapea claves a un tipo
type ProductIndex = Record<string, Product>;
// { [key: string]: Product }

// Partial \u2014 todas las propiedades opcionales
type ProductUpdate = Partial<Product>;
// { id?: string; name?: string; price?: number; category?: string }

// Required \u2014 todas obligatorias
type StrictProduct = Required<Partial<Product>>;

// Extract \u2014 extrae tipos de una union
type StringFields = Extract<keyof Product, string>;
// 'id' | 'name' | 'price' | 'category'

// Exclude \u2014 excluye tipos de una union
type NonIdFields = Exclude<keyof Product, 'id'>;
// 'name' | 'price' | 'category'

// ReturnType \u2014 obtiene el tipo de retorno de una funci\xF3n
function createProduct(): Product {
  return { id: '1', name: 'Item', price: 10, category: 'General' };
}
type Created = ReturnType<typeof createProduct>;
// Product

// Combinaciones avanzadas
type ProductPreview = Readonly<Pick<Product, 'name' | 'price'>>;
type ProductDraft = Partial<Omit<Product, 'id'>> & { id?: never };`),t()(),n(85,"div",2),e(86," \u{1F4C2} "),n(87,"code"),e(88,"features/typescript-lab/ts-playground.ts"),t(),e(89," \u2014 Partial, Pick, Omit, Record ejemplos "),t()()())},dependencies:[s],styles:["[_nghost-%COMP%]{display:block;padding:1rem 0}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.2rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .6rem;font-size:1.1rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:6px;padding:.8rem;overflow-x:auto;font-size:.85rem;line-height:1.5}code[_ngcontent-%COMP%]{color:var(--text)}"]})};export{o as TsLearnComponent};
