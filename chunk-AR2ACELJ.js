import{a as d}from"./chunk-WXOJIICE.js";import"./chunk-BKIDS2JO.js";import{Db as n,Eb as t,Zb as e,fb as o,sa as a,ta as r}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var s=class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=o({type:l,selectors:[["app-ts-learn"]],decls:2033,vars:0,consts:[["appAutoGlossary","",1,"cards"],["id","1-generics",1,"card"],[1,"code-ref"],["id","2-type-guards",1,"card"],["id","3-discriminated-unions",1,"card"],["id","4-utility-types",1,"card"],["id","5-sistema-de-tipos-estructural",1,"card"],["id","6-mapped-types",1,"card"],["id","7-conditional-types-e-infer",1,"card"],["id","8-template-literal-types",1,"card"],["id","9-unknown-vs-any-vs-never",1,"card"],["id","10-type-narrowing-y-control-flow-analysis",1,"card"],["id","11-satisfies-operator",1,"card"],["id","12-const-assertions-as-const",1,"card"],["id","13-enums-vs-union-types",1,"card"],["id","14-interfaces-vs-types-y-declaration-merging",1,"card"],["id","15-strict-mode-y-tsconfig",1,"card"],["id","16-decoradores-en-angular",1,"card"]],template:function(i,c){i&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),e(3,"\u{1F537} 1. Generics"),t(),n(4,"p"),e(5," Los generics permiten crear componentes reutilizables que trabajan con cualquier tipo. En lugar de usar "),n(6,"code"),e(7,"any"),t(),e(8,", los generics preservan la informaci\xF3n de tipos, dando autocompletado y verificaci\xF3n en tiempo de compilaci\xF3n. "),t(),n(9,"pre")(10,"code"),e(11,`class DataService<T> {
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
const numberCache = new Cache<number>(); // Cache<number>`),t()(),n(12,"h4"),e(13,"Generics en funciones, interfaces e inferencia"),t(),n(14,"p"),e(15," Los generics no solo aplican a clases: funciones e interfaces tambi\xE9n los usan. TypeScript "),n(16,"strong"),e(17,"infiere"),t(),e(18," el par\xE1metro de tipo a partir de los argumentos, por lo que rara vez hay que escribirlo expl\xEDcitamente. "),t(),n(19,"pre")(20,"code"),e(21,`// Generic function \u2014 T se infiere del argumento
function firstOrNull<T>(items: T[]): T | null {
  return items.length > 0 ? items[0] : null;
}

const n = firstOrNull([1, 2, 3]);       // T = number \u2192 number | null
const s = firstOrNull(['a', 'b']);      // T = string \u2192 string | null

// M\xFAltiples par\xE1metros de tipo relacionados
function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

const prices = pluck(products, 'price'); // number[]
// pluck(products, 'colour');            // \u274C error: 'colour' no es keyof Product

// Generic interface \u2014 t\xEDpico en APIs
interface ApiResult<T> {
  data: T;
  total: number;
  page: number;
}

function fetchPage<T>(url: string): Promise<ApiResult<T>> {
  return fetch(url).then((r) => r.json());
}`),t()(),n(22,"h4"),e(23,"\u2705 Mejores pr\xE1cticas"),t(),n(24,"ul")(25,"li")(26,"strong"),e(27,"Usa constraints ("),n(28,"code"),e(29,"extends"),t(),e(30,")"),t(),e(31," en lugar de castear a "),n(32,"code"),e(33,"any"),t(),e(34," dentro del cuerpo: "),n(35,"code"),e(36,"T extends HasId"),t(),e(37," hace que "),n(38,"code"),e(39,"item.id"),t(),e(40," sea seguro sin cast. "),t(),n(41,"li")(42,"strong"),e(43,"Deja que TypeScript infiera:"),t(),n(44,"code"),e(45,"firstOrNull([1, 2])"),t(),e(46," es mejor que "),n(47,"code"),e(48,"firstOrNull<number>([1, 2])"),t(),e(49,". Especifica el tipo solo cuando la inferencia falla (por ejemplo, arrays vac\xEDos). "),t(),n(50,"li")(51,"strong"),e(52,"Nombres descriptivos"),t(),e(53," cuando hay varios par\xE1metros: "),n(54,"code"),e(55,"<TItem, TKey>"),t(),e(56," comunica m\xE1s que "),n(57,"code"),e(58,"<T, U>"),t(),e(59,". "),t(),n(60,"li")(61,"strong"),e(62,"No hagas gen\xE9rico lo que no lo necesita:"),t(),e(63," si el par\xE1metro de tipo aparece una sola vez en la firma, probablemente sobra. "),t()(),n(64,"h4"),e(65,"\u26A0\uFE0F Errores comunes"),t(),n(66,"ul")(67,"li")(68,"strong"),e(69,"Usar "),n(70,"code"),e(71,"any"),t(),e(72,' para "salir del paso":'),t(),n(73,"code"),e(74,"(item as any).id"),t(),e(75," compila pero pierde toda la seguridad. La soluci\xF3n correcta es el constraint "),n(76,"code"),e(77,"T extends HasId"),t(),e(78,". "),t(),n(79,"li")(80,"strong"),e(81,"Confundir "),n(82,"code"),e(83,"<T>"),t(),e(84," con un cast:"),t(),n(85,"code"),e(86,"function f<T>()"),t(),e(87," declara un par\xE1metro de tipo; "),n(88,"code"),e(89,"value as T"),t(),e(90," es una aserci\xF3n. Son mecanismos distintos. "),t(),n(91,"li")(92,"strong"),e(93,"Constraint demasiado amplio:"),t(),n(94,"code"),e(95,"T extends object"),t(),e(96," no permite acceder a ninguna propiedad concreta. Define una interfaz m\xEDnima con lo que realmente necesitas. "),t()(),n(97,"h4"),e(98,"\u{1F3A4} Preguntas de entrevista"),t(),n(99,"ul")(100,"li")(101,"strong"),e(102,"\xBFQu\xE9 diferencia hay entre generics y "),n(103,"code"),e(104,"any"),t(),e(105,"?"),t(),n(106,"em"),e(107,"R:"),t(),n(108,"code"),e(109,"any"),t(),e(110," desactiva el chequeo de tipos; un generic preserva la relaci\xF3n entre entrada y salida ("),n(111,"code"),e(112,"identity<T>(x: T): T"),t(),e(113," devuelve el mismo tipo que recibe). "),t(),n(114,"li")(115,"strong"),e(116,"\xBFPara qu\xE9 sirve "),n(117,"code"),e(118,"K extends keyof T"),t(),e(119,"?"),t(),n(120,"em"),e(121,"R:"),t(),e(122," Restringe "),n(123,"code"),e(124,"K"),t(),e(125," a las claves de "),n(126,"code"),e(127,"T"),t(),e(128,", permitiendo funciones type-safe de acceso a propiedades donde el retorno es "),n(129,"code"),e(130,"T[K]"),t(),e(131," (indexed access type). "),t(),n(132,"li")(133,"strong"),e(134,"\xBFCu\xE1ndo usar\xEDas un default en un generic?"),t(),n(135,"em"),e(136,"R:"),t(),e(137," Cuando hay un tipo habitual y quieres evitar que el consumidor lo escriba siempre: "),n(138,"code"),e(139,"Cache<T = string>"),t(),e(140,". Similar a los par\xE1metros por defecto en funciones. "),t()(),n(141,"div",2),e(142," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(143,"ul")(144,"li")(145,"code"),e(146,"features/typescript-lab/ts-playground.ts"),t(),e(147," \u2014 Generic interfaces y funciones"),t(),n(148,"li")(149,"code"),e(150,"features/ngrx-lab/store/product.reducer.ts"),t(),e(151," \u2014 EntityAdapter<Product>"),t(),n(152,"li")(153,"code"),e(154,"shared/models/product.model.ts"),t(),e(155," \u2014 AsyncState<T> gen\xE9rico"),t()()()(),n(156,"div",3)(157,"h3"),e(158,"\u{1F537} 2. Type Guards"),t(),n(159,"p"),e(160," Los type guards permiten estrechar (narrow) el tipo de una variable dentro de un bloque condicional. TypeScript usa el keyword "),n(161,"code"),e(162,"is"),t(),e(163,", "),n(164,"code"),e(165,"instanceof"),t(),e(166,", "),n(167,"code"),e(168,"in"),t(),e(169," y "),n(170,"code"),e(171,"typeof"),t(),e(172," para inferir tipos m\xE1s espec\xEDficos autom\xE1ticamente. "),t(),n(173,"pre")(174,"code"),e(175,`interface Product {
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
}`),t()(),n(176,"h4"),e(177,"Assertion functions"),t(),n(178,"p"),e(179," Una assertion function usa "),n(180,"code"),e(181,"asserts"),t(),e(182," en la firma: si la funci\xF3n retorna sin lanzar excepci\xF3n, TypeScript asume que la condici\xF3n es cierta para el resto del scope. Es ideal para validar precondiciones al inicio de una funci\xF3n. "),t(),n(183,"pre")(184,"code"),e(185,`// asserts value is T \u2014 narrowing por excepci\xF3n
function assertIsProduct(value: unknown): asserts value is Product {
  if (!isProduct(value)) {
    throw new Error('El valor no es un Product v\xE1lido');
  }
}

// asserts condition \u2014 versi\xF3n gen\xE9rica (como Node assert)
function assert(condition: unknown, msg?: string): asserts condition {
  if (!condition) throw new Error(msg ?? 'Assertion failed');
}

function checkout(data: unknown, user: User | null): void {
  assertIsProduct(data);   // a partir de aqu\xED data: Product
  assert(user, 'Se requiere sesi\xF3n'); // user: User (sin null)

  console.log(\\\`\${user.name} compra \${data.name}\\\`);
}`),t()(),n(186,"h4"),e(187,"\u2705 Mejores pr\xE1cticas"),t(),n(188,"ul")(189,"li")(190,"strong"),e(191,"Valida en los bordes de la app:"),t(),e(192," respuestas HTTP, "),n(193,"code"),e(194,"JSON.parse"),t(),e(195,", "),n(196,"code"),e(197,"localStorage"),t(),e(198,". Tipa esas entradas como "),n(199,"code"),e(200,"unknown"),t(),e(201," y p\xE1salas por un guard antes de usarlas. "),t(),n(202,"li")(203,"strong"),e(204,"Un predicado "),n(205,"code"),e(206,"is"),t(),e(207," debe verificar de verdad:"),t(),e(208," el compilador conf\xEDa ciegamente en tu implementaci\xF3n. Si el cuerpo devuelve "),n(209,"code"),e(210,"true"),t(),e(211," sin comprobar nada, has creado un cast disfrazado. "),t(),n(212,"li")(213,"strong"),e(214,"Prefiere "),n(215,"code"),e(216,"typeof"),t(),e(217,"/"),n(218,"code"),e(219,"in"),t(),e(220," inline"),t(),e(221," para casos simples; reserva los predicados user-defined para validaciones que se repiten. "),t()(),n(222,"h4"),e(223,"\u26A0\uFE0F Errores comunes"),t(),n(224,"ul")(225,"li")(226,"strong")(227,"code"),e(228,"typeof null === 'object'"),t(),e(229,":"),t(),e(230," siempre a\xF1ade "),n(231,"code"),e(232,"value !== null"),t(),e(233," al comprobar objetos, o el guard aceptar\xE1 "),n(234,"code"),e(235,"null"),t(),e(236,". "),t(),n(237,"li")(238,"strong")(239,"code"),e(240,"typeof"),t(),e(241," solo distingue primitivos:"),t(),n(242,"code"),e(243,"typeof x === 'object'"),t(),e(244," no diferencia entre "),n(245,"code"),e(246,"Product"),t(),e(247," y "),n(248,"code"),e(249,"User"),t(),e(250,"; para eso necesitas "),n(251,"code"),e(252,"in"),t(),e(253,", un discriminante o un predicado. "),t(),n(254,"li")(255,"strong")(256,"code"),e(257,"instanceof"),t(),e(258," no funciona con datos deserializados:"),t(),e(259," un objeto de "),n(260,"code"),e(261,"JSON.parse"),t(),e(262," nunca es "),n(263,"code"),e(264,"instanceof"),t(),e(265," de tu clase porque no pas\xF3 por el constructor. Usa guards estructurales. "),t(),n(266,"li")(267,"strong"),e(268,"Assertion functions con arrow functions:"),t(),e(269," TypeScript exige una anotaci\xF3n de tipo expl\xEDcita en la variable ("),n(270,"code"),e(271,"const assert: (c: unknown) => asserts c = ..."),t(),e(272,") o el "),n(273,"code"),e(274,"asserts"),t(),e(275," no se aplica. "),t()(),n(276,"h4"),e(277,"\u{1F3A4} Preguntas de entrevista"),t(),n(278,"ul")(279,"li")(280,"strong"),e(281,"\xBFQu\xE9 es un user-defined type guard?"),t(),n(282,"em"),e(283,"R:"),t(),e(284," Una funci\xF3n cuyo retorno se anota como "),n(285,"code"),e(286,"value is Tipo"),t(),e(287,". Si devuelve "),n(288,"code"),e(289,"true"),t(),e(290,", el compilador estrecha el tipo en la rama correspondiente. "),t(),n(291,"li")(292,"strong"),e(293,"\xBFDiferencia entre "),n(294,"code"),e(295,"value is T"),t(),e(296," y "),n(297,"code"),e(298,"asserts value is T"),t(),e(299,"?"),t(),n(300,"em"),e(301,"R:"),t(),e(302," El primero estrecha dentro del "),n(303,"code"),e(304,"if"),t(),e(305," seg\xFAn el booleano devuelto; el segundo estrecha todo el c\xF3digo posterior a la llamada, porque lanzar excepci\xF3n es la \xFAnica salida negativa. "),t(),n(306,"li")(307,"strong"),e(308,"\xBFPor qu\xE9 "),n(309,"code"),e(310,"instanceof"),t(),e(311," puede fallar entre iframes o realms?"),t(),n(312,"em"),e(313,"R:"),t(),e(314," Cada realm tiene sus propios constructores globales; un "),n(315,"code"),e(316,"Array"),t(),e(317," creado en otro iframe no es "),n(318,"code"),e(319,"instanceof Array"),t(),e(320," del actual. Por eso existe "),n(321,"code"),e(322,"Array.isArray"),t(),e(323,". "),t()(),n(324,"div",2),e(325," \u{1F4C2} "),n(326,"code"),e(327,"features/typescript-lab/ts-playground.ts"),t(),e(328," \u2014 Type Guards con is, instanceof, in operator "),t()(),n(329,"div",4)(330,"h3"),e(331,"\u{1F537} 3. Discriminated Unions"),t(),n(332,"p"),e(333," Las discriminated unions usan un campo literal com\xFAn (discriminante) para que TypeScript pueda estrechar el tipo en cada rama de un "),n(334,"code"),e(335,"switch"),t(),e(336," o "),n(337,"code"),e(338,"if"),t(),e(339,". Es el patr\xF3n ideal para modelar estados de una aplicaci\xF3n: cada estado declara "),n(340,"em"),e(341,"solo"),t(),e(342," los datos que existen en \xE9l, haciendo imposibles los estados inv\xE1lidos ("),n(343,"em"),e(344,"make illegal states unrepresentable"),t(),e(345,"). "),t(),n(346,"pre")(347,"code"),e(348,`type AsyncState<T> =
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
}`),t()(),n(349,"h4"),e(350,"Patr\xF3n state machine"),t(),n(351,"p"),e(352," Comparado con la alternativa de flags booleanos ("),n(353,"code"),e(354,"isLoading"),t(),e(355,", "),n(356,"code"),e(357,"hasError"),t(),e(358,", "),n(359,"code"),e(360,"data?"),t(),e(361,"), la union discriminada elimina combinaciones absurdas como "),n(362,"code"),e(363,"isLoading && hasError"),t(),e(364,". El compilador se convierte en la documentaci\xF3n de la m\xE1quina de estados: si a\xF1ades un estado nuevo, el "),n(365,"code"),e(366,"assertNever"),t(),e(367," del "),n(368,"code"),e(369,"default"),t(),e(370," har\xE1 fallar la compilaci\xF3n en cada "),n(371,"code"),e(372,"switch"),t(),e(373," que falte por actualizar. "),t(),n(374,"h4"),e(375,"\u2705 Mejores pr\xE1cticas"),t(),n(376,"ul")(377,"li")(378,"strong"),e(379,"Discriminante literal y consistente:"),t(),e(380," usa siempre el mismo nombre ("),n(381,"code"),e(382,"status"),t(),e(383,", "),n(384,"code"),e(385,"type"),t(),e(386,", "),n(387,"code"),e(388,"kind"),t(),e(389,") con valores string literales, nunca booleanos ni tipos amplios. "),t(),n(390,"li")(391,"strong"),e(392,"Exhaustive check en cada consumidor:"),t(),e(393," el "),n(394,"code"),e(395,"default: assertNever(state)"),t(),e(396,' convierte "olvid\xE9 un caso" en un error de compilaci\xF3n en vez de un bug en producci\xF3n. '),t(),n(397,"li")(398,"strong"),e(399,"Modela con la union, no con opcionales:"),t(),n(400,"code"),e(401,"data?: T; error?: string"),t(),e(402," permite 4 combinaciones, de las que 2 son inv\xE1lidas. La union solo permite las v\xE1lidas. "),t()(),n(403,"h4"),e(404,"\u26A0\uFE0F Errores comunes"),t(),n(405,"ul")(406,"li")(407,"strong"),e(408,"Discriminante tipado como "),n(409,"code"),e(410,"string"),t(),e(411,":"),t(),e(412," si declaras "),n(413,"code"),e(414,"status: string"),t(),e(415," en vez del literal "),n(416,"code"),e(417,"'loading'"),t(),e(418,", el narrowing no funciona. Cuidado al construir objetos sin anotar el tipo (usa "),n(419,"code"),e(420,"satisfies"),t(),e(421," o "),n(422,"code"),e(423,"as const"),t(),e(424,"). "),t(),n(425,"li")(426,"strong"),e(427,"Desestructurar antes del switch:"),t(),n(428,"code"),e(429,"const { status, data } = state"),t(),e(430," rompe la relaci\xF3n entre variables (en versiones antiguas de TS) y suele fallar porque "),n(431,"code"),e(432,"data"),t(),e(433," no existe en todas las ramas. Estrecha primero, luego accede. "),t(),n(434,"li")(435,"strong"),e(436,"Switch sin "),n(437,"code"),e(438,"never"),t(),e(439," check y sin "),n(440,"code"),e(441,"noImplicitReturns"),t(),e(442,":"),t(),e(443," un caso olvidado devuelve "),n(444,"code"),e(445,"undefined"),t(),e(446," silenciosamente. "),t()(),n(447,"h4"),e(448,"\u{1F3A4} Preguntas de entrevista"),t(),n(449,"ul")(450,"li")(451,"strong"),e(452,'\xBFQu\xE9 necesita una union para ser "discriminada"?'),t(),n(453,"em"),e(454,"R:"),t(),e(455," Que todos los miembros compartan una propiedad con un tipo literal \xFAnico por miembro. TypeScript usa esa propiedad para estrechar. "),t(),n(456,"li")(457,"strong"),e(458,"\xBFC\xF3mo garantizas exhaustividad en un switch?"),t(),n(459,"em"),e(460,"R:"),t(),e(461," Asignando el valor a "),n(462,"code"),e(463,"never"),t(),e(464," en el "),n(465,"code"),e(466,"default"),t(),e(467," (funci\xF3n "),n(468,"code"),e(469,"assertNever"),t(),e(470,"). Si queda alg\xFAn miembro sin manejar, no es asignable a "),n(471,"code"),e(472,"never"),t(),e(473," y falla la compilaci\xF3n. "),t(),n(474,"li")(475,"strong"),e(476,"\xBFD\xF3nde se usa este patr\xF3n en Angular/NgRx?"),t(),n(477,"em"),e(478,"R:"),t(),e(479," Las actions de NgRx son una discriminated union por "),n(480,"code"),e(481,"type"),t(),e(482,"; los estados de carga ("),n(483,"code"),e(484,"AsyncState"),t(),e(485,") y los eventos de "),n(486,"code"),e(487,"HttpClient"),t(),e(488," ("),n(489,"code"),e(490,"HttpEventType"),t(),e(491,") siguen la misma idea. "),t()(),n(492,"div",2),e(493," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(494,"ul")(495,"li")(496,"code"),e(497,"features/typescript-lab/ts-playground.ts"),t(),e(498," \u2014 ApiResponse con status discriminante"),t(),n(499,"li")(500,"code"),e(501,"shared/models/product.model.ts"),t(),e(502," \u2014 AsyncState con status: idle | loading | success | error"),t()()()(),n(503,"div",5)(504,"h3"),e(505,"\u{1F537} 4. Utility Types"),t(),n(506,"p"),e(507," TypeScript incluye utility types integrados que transforman tipos existentes. Son esenciales para derivar tipos sin duplicar definiciones, manteniendo el c\xF3digo DRY y type-safe. "),t(),n(508,"pre")(509,"code"),e(510,`interface Product {
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
type ProductDraft = Partial<Omit<Product, 'id'>> & { id?: never };`),t()(),n(511,"h4"),e(512,"M\xE1s utility types: NonNullable, Parameters, Awaited, Readonly"),t(),n(513,"pre")(514,"code"),e(515,`// NonNullable \u2014 quita null y undefined de un tipo
type MaybeUser = User | null | undefined;
type DefiniteUser = NonNullable<MaybeUser>; // User

// Parameters \u2014 tupla con los tipos de los argumentos
function updatePrice(id: string, price: number, notify?: boolean) { /* ... */ }
type UpdateArgs = Parameters<typeof updatePrice>;
// [id: string, price: number, notify?: boolean]

// \xDAtil para wrappers que reenv\xEDan argumentos:
function withLogging(...args: Parameters<typeof updatePrice>) {
  console.log('updatePrice', args);
  return updatePrice(...args);
}

// Awaited \u2014 desenvuelve promesas (recursivo)
type Data = Awaited<Promise<Product[]>>;          // Product[]
type Nested = Awaited<Promise<Promise<number>>>; // number
type FromFn = Awaited<ReturnType<typeof fetchProducts>>;

// Readonly \u2014 inmutabilidad superficial en compile-time
type FrozenProduct = Readonly<Product>;
const p: FrozenProduct = { id: '1', name: 'A', price: 10, category: 'x' };
// p.price = 20; // \u274C error: price es readonly`),t()(),n(516,"h4"),e(517,"\xBFCu\xE1ndo usar cada uno?"),t(),n(518,"ul")(519,"li")(520,"strong"),e(521,"Partial"),t(),e(522," \u2014 payloads de update (PATCH) y opciones de configuraci\xF3n con defaults."),t(),n(523,"li")(524,"strong"),e(525,"Required"),t(),e(526," \u2014 normalizar una config despu\xE9s de aplicar defaults."),t(),n(527,"li")(528,"strong"),e(529,"Pick / Omit"),t(),e(530," \u2014 DTOs derivados del modelo: formularios de creaci\xF3n ("),n(531,"code"),e(532,"Omit<T, 'id'>"),t(),e(533,"), vistas resumidas ("),n(534,"code"),e(535,"Pick"),t(),e(536,")."),t(),n(537,"li")(538,"strong"),e(539,"Record"),t(),e(540," \u2014 diccionarios indexados y mapas de configuraci\xF3n por clave conocida ("),n(541,"code"),e(542,"Record<Status, string>"),t(),e(543,")."),t(),n(544,"li")(545,"strong"),e(546,"Exclude / Extract"),t(),e(547," \u2014 filtrar uniones (frecuente sobre "),n(548,"code"),e(549,"keyof T"),t(),e(550,")."),t(),n(551,"li")(552,"strong"),e(553,"NonNullable"),t(),e(554," \u2014 resultados de "),n(555,"code"),e(556,"find"),t(),e(557,"/APIs tras validar que no son null."),t(),n(558,"li")(559,"strong"),e(560,"ReturnType / Parameters / Awaited"),t(),e(561," \u2014 derivar tipos de funciones existentes sin exportar interfaces extra (wrappers, mocks de tests, servicios HTTP)."),t()(),n(562,"h4"),e(563,"\u26A0\uFE0F Errores comunes"),t(),n(564,"ul")(565,"li")(566,"strong")(567,"code"),e(568,"Partial"),t(),e(569," es superficial:"),t(),n(570,"code"),e(571,"Partial<Order>"),t(),e(572," hace opcional "),n(573,"code"),e(574,"customer"),t(),e(575,", pero si est\xE1 presente debe estar completo. Para anidados necesitas un "),n(576,"code"),e(577,"DeepPartial"),t(),e(578," propio (mapped type recursivo). "),t(),n(579,"li")(580,"strong")(581,"code"),e(582,"Omit"),t(),e(583," no valida las claves:"),t(),n(584,"code"),e(585,"Omit<Product, 'pricee'>"),t(),e(586," (typo) compila sin aviso porque usa "),n(587,"code"),e(588,"Exclude<keyof T, K>"),t(),e(589," sin constraint. "),n(590,"code"),e(591,"Pick"),t(),e(592," s\xED falla con claves inexistentes. "),t(),n(593,"li")(594,"strong")(595,"code"),e(596,"Record<string, T>"),t(),e(597," promete demasiado:"),t(),e(598," el acceso "),n(599,"code"),e(600,"dict['loQueSea']"),t(),e(601," se tipa como "),n(602,"code"),e(603,"T"),t(),e(604," aunque la clave no exista. Activa "),n(605,"code"),e(606,"noUncheckedIndexedAccess"),t(),e(607," o usa "),n(608,"code"),e(609,"Map"),t(),e(610,". "),t(),n(611,"li")(612,"strong")(613,"code"),e(614,"Readonly"),t(),e(615," solo existe en compile-time:"),t(),e(616," no congela el objeto en runtime; para eso est\xE1 "),n(617,"code"),e(618,"Object.freeze"),t(),e(619,". "),t()(),n(620,"h4"),e(621,"\u{1F3A4} Preguntas de entrevista"),t(),n(622,"ul")(623,"li")(624,"strong"),e(625,"\xBFC\xF3mo se implementa "),n(626,"code"),e(627,"Partial<T>"),t(),e(628," internamente?"),t(),n(629,"em"),e(630,"R:"),t(),e(631," Es un mapped type: "),n(632,"code"),e(633,"{ [K in keyof T]?: T[K] }"),t(),e(634,". Casi todos los utility types son mapped types o conditional types de una l\xEDnea. "),t(),n(635,"li")(636,"strong"),e(637,"\xBFDiferencia entre "),n(638,"code"),e(639,"Omit"),t(),e(640," y "),n(641,"code"),e(642,"Exclude"),t(),e(643,"?"),t(),n(644,"em"),e(645,"R:"),t(),n(646,"code"),e(647,"Exclude"),t(),e(648," opera sobre uniones (quita miembros); "),n(649,"code"),e(650,"Omit"),t(),e(651," opera sobre objetos (quita propiedades) y de hecho se define como "),n(652,"code"),e(653,"Pick<T, Exclude<keyof T, K>>"),t(),e(654,". "),t(),n(655,"li")(656,"strong"),e(657,"\xBFPor qu\xE9 "),n(658,"code"),e(659,"Awaited"),t(),e(660," y no "),n(661,"code"),e(662,"ReturnType"),t(),e(663," para una funci\xF3n async?"),t(),n(664,"em"),e(665,"R:"),t(),n(666,"code"),e(667,"ReturnType"),t(),e(668," de una funci\xF3n async es "),n(669,"code"),e(670,"Promise<T>"),t(),e(671,"; "),n(672,"code"),e(673,"Awaited"),t(),e(674," desenvuelve la promesa (recursivamente) para llegar a "),n(675,"code"),e(676,"T"),t(),e(677,". "),t()(),n(678,"div",2),e(679," \u{1F4C2} "),n(680,"code"),e(681,"features/typescript-lab/ts-playground.ts"),t(),e(682," \u2014 Partial, Pick, Omit, Record ejemplos "),t()(),n(683,"div",6)(684,"h3"),e(685,"\u{1F537} 5. Sistema de Tipos Estructural"),t(),n(686,"p"),e(687," TypeScript usa "),n(688,"strong"),e(689,"structural typing"),t(),e(690,' ("duck typing"): dos tipos son compatibles si tienen la misma forma, sin importar su nombre ni si se declararon con '),n(691,"code"),e(692,"implements"),t(),e(693,". Esto contrasta con lenguajes nominales como Java o C#, donde la compatibilidad depende de la declaraci\xF3n expl\xEDcita. "),t(),n(694,"pre")(695,"code"),e(696,`interface Point { x: number; y: number; }

class Coordinate {
  constructor(public x: number, public y: number) {}
}

// \u2705 Compatible: Coordinate tiene la forma de Point
const p: Point = new Coordinate(1, 2);

// \u2705 Un objeto con M\xC1S propiedades tambi\xE9n es asignable...
const p3d = { x: 1, y: 2, z: 3 };
const p2: Point = p3d; // OK (asignaci\xF3n desde variable)

// \u274C ...pero los literales frescos sufren "excess property check"
// const p3: Point = { x: 1, y: 2, z: 3 };
// Error: 'z' no existe en Point

// Consecuencia: "branded types" para simular tipos nominales
type UserId = string & { readonly __brand: 'UserId' };
type OrderId = string & { readonly __brand: 'OrderId' };

function getUser(id: UserId) { /* ... */ }

const orderId = 'ord-1' as OrderId;
// getUser(orderId); // \u274C error: los brands no coinciden
getUser('u-1' as UserId); // \u2705`),t()(),n(697,"h4"),e(698,"\u2705 Mejores pr\xE1cticas"),t(),n(699,"ul")(700,"li")(701,"strong"),e(702,"Aprovecha la compatibilidad estructural"),t(),e(703," para tests y mocks: cualquier objeto con la forma correcta sirve, sin herencia ni frameworks de mocking. "),t(),n(704,"li")(705,"strong"),e(706,"Usa branded types"),t(),e(707," cuando dos conceptos comparten primitivo (ids, monedas, unidades) y confundirlos ser\xEDa un bug grave. "),t(),n(708,"li")(709,"strong"),e(710,"Interfaces m\xEDnimas en par\xE1metros:"),t(),e(711," pide solo la forma que usas ("),n(712,"code"),e(713,"{ id: string }"),t(),e(714," en vez de todo "),n(715,"code"),e(716,"Product"),t(),e(717,"); cualquier superset ser\xE1 asignable. "),t()(),n(718,"h4"),e(719,"\u26A0\uFE0F Errores comunes"),t(),n(720,"ul")(721,"li")(722,"strong"),e(723,"Asumir tipado nominal:"),t(),e(724," dos interfaces con la misma forma son intercambiables aunque sem\xE1nticamente sean distintas ("),n(725,"code"),e(726,"Euros"),t(),e(727," vs "),n(728,"code"),e(729,"Dolares"),t(),e(730," como "),n(731,"code"),e(732,"number"),t(),e(733,"). "),t(),n(734,"li")(735,"strong"),e(736,"Confundir excess property check con incompatibilidad:"),t(),e(737,' solo aplica a literales de objeto "frescos" asignados directamente; la misma forma pasada por una variable intermedia compila. '),t(),n(738,"li")(739,"strong"),e(740,"Interfaces vac\xEDas:"),t(),n(741,"code"),e(742,"interface Marker {}"),t(),e(743," es compatible con casi todo (estructuralmente no exige nada), por lo que no sirve como marcador. "),t()(),n(744,"h4"),e(745,"\u{1F3A4} Preguntas de entrevista"),t(),n(746,"ul")(747,"li")(748,"strong"),e(749,"\xBFQu\xE9 significa que TypeScript sea estructural?"),t(),n(750,"em"),e(751,"R:"),t(),e(752," La compatibilidad se decide por la forma (miembros y tipos), no por el nombre del tipo ni por declaraciones de herencia. "),t(),n(753,"li")(754,"strong"),e(755,"\xBFQu\xE9 es el excess property check?"),t(),n(756,"em"),e(757,"R:"),t(),e(758," Una comprobaci\xF3n extra que aplica solo a object literals asignados directamente a un tipo: propiedades desconocidas producen error, para cazar typos. "),t(),n(759,"li")(760,"strong"),e(761,"\xBFC\xF3mo simulas tipado nominal?"),t(),n(762,"em"),e(763,"R:"),t(),e(764," Con branded/opaque types: intersecci\xF3n con una propiedad fantasma ("),n(765,"code"),e(766,"& { __brand: 'X' }"),t(),e(767,") que no existe en runtime pero diferencia los tipos en compile-time. "),t()()(),n(768,"div",7)(769,"h3"),e(770,"\u{1F537} 6. Mapped Types"),t(),n(771,"p"),e(772," Un mapped type itera sobre las claves de un tipo ("),n(773,"code"),e(774,"[K in keyof T]"),t(),e(775,") y produce un tipo nuevo transformando cada propiedad. Con los modificadores "),n(776,"code"),e(777,"+/-"),t(),e(778," se a\xF1aden o quitan "),n(779,"code"),e(780,"readonly"),t(),e(781," y "),n(782,"code"),e(783,"?"),t(),e(784,", y con "),n(785,"code"),e(786,"as"),t(),e(787," se renombran claves (key remapping). "),t(),n(788,"pre")(789,"code"),e(790,`interface Product {
  id: string;
  name: string;
  price: number;
}

// keyof \u2014 union de claves
type ProductKeys = keyof Product; // 'id' | 'name' | 'price'

// Mapped type b\xE1sico (as\xED se implementa Readonly)
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

// Modificadores -readonly y -? (quitar)
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
type Concrete<T> = {
  [K in keyof T]-?: T[K]; // as\xED funciona Required
};

// Transformar el tipo de cada valor
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
type ProductForm = Nullable<Product>;
// { id: string | null; name: string | null; price: number | null }

// Key remapping con 'as' + template literals
type Getters<T> = {
  [K in keyof T as \\\`get\${Capitalize<string & K>}\\\`]: () => T[K];
};
type ProductGetters = Getters<Product>;
// { getId: () => string; getName: () => string; getPrice: () => number }

// Filtrar propiedades: remapear a never las elimina
type OnlyStrings<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};
type ProductStrings = OnlyStrings<Product>;
// { id: string; name: string }`),t()(),n(791,"h4"),e(792,"\u2705 Mejores pr\xE1cticas"),t(),n(793,"ul")(794,"li")(795,"strong"),e(796,"Deriva, no dupliques:"),t(),e(797,' si un tipo "form" o "DTO" es una transformaci\xF3n mec\xE1nica del modelo, expr\xE9salo como mapped type para que se actualice solo al cambiar el modelo. '),t(),n(798,"li")(799,"strong"),e(800,"Comb\xEDnalos con "),n(801,"code"),e(802,"keyof"),t(),e(803," gen\xE9rico:"),t(),n(804,"code"),e(805,"K in keyof T"),t(),e(806," mantiene la relaci\xF3n clave\u2192valor ("),n(807,"code"),e(808,"T[K]"),t(),e(809,"), a diferencia de "),n(810,"code"),e(811,"Record"),t(),e(812,", que aplana todo al mismo tipo. "),t(),n(813,"li")(814,"strong"),e(815,"Documenta los mapped types complejos"),t(),e(816," con un comentario que muestre el resultado para un tipo de ejemplo, como en los snippets de arriba. "),t()(),n(817,"h4"),e(818,"\u26A0\uFE0F Errores comunes"),t(),n(819,"ul")(820,"li")(821,"strong"),e(822,"Olvidar "),n(823,"code"),e(824,"string & K"),t(),e(825," en template literals:"),t(),n(826,"code"),e(827,"keyof T"),t(),e(828," incluye "),n(829,"code"),e(830,"symbol"),t(),e(831,", que no es interpolable; hay que intersectar con "),n(832,"code"),e(833,"string"),t(),e(834,". "),t(),n(835,"li")(836,"strong"),e(837,"Usar mapped types sobre uniones esperando iterar miembros:"),t(),n(838,"code"),e(839,"[K in keyof (A | B)]"),t(),e(840," solo ve las claves comunes. Para distribuir sobre una uni\xF3n se usan conditional types. "),t(),n(841,"li")(842,"strong"),e(843,"Confundir "),n(844,"code"),e(845,"in"),t(),e(846," (mapped type) con el operador runtime "),n(847,"code"),e(848,"in"),t(),e(849,":"),t(),e(850," mismo keyword, contextos distintos (tipos vs expresiones). "),t()(),n(851,"h4"),e(852,"\u{1F3A4} Preguntas de entrevista"),t(),n(853,"ul")(854,"li")(855,"strong"),e(856,"\xBFQu\xE9 hace "),n(857,"code"),e(858,"keyof"),t(),e(859,"?"),t(),n(860,"em"),e(861,"R:"),t(),e(862," Produce la uni\xF3n de las claves de un tipo como literales: "),n(863,"code"),e(864,"keyof Product = 'id' | 'name' | 'price'"),t(),e(865,". Es la base de mapped types y de funciones type-safe de acceso a propiedades. "),t(),n(866,"li")(867,"strong"),e(868,"\xBFC\xF3mo eliminar\xEDas una propiedad con key remapping?"),t(),n(869,"em"),e(870,"R:"),t(),e(871," Remape\xE1ndola a "),n(872,"code"),e(873,"never"),t(),e(874,": "),n(875,"code"),e(876,"[K in keyof T as K extends 'secret' ? never : K]"),t(),e(877,". "),t(),n(878,"li")(879,"strong"),e(880,"\xBFQu\xE9 significan "),n(881,"code"),e(882,"-?"),t(),e(883," y "),n(884,"code"),e(885,"-readonly"),t(),e(886,"?"),t(),n(887,"em"),e(888,"R:"),t(),e(889," Quitan el modificador correspondiente al mapear: as\xED est\xE1n implementados "),n(890,"code"),e(891,"Required"),t(),e(892," (quita "),n(893,"code"),e(894,"?"),t(),e(895,") y utilidades tipo "),n(896,"code"),e(897,"Mutable"),t(),e(898," (quita "),n(899,"code"),e(900,"readonly"),t(),e(901,"). "),t()(),n(902,"div",2),e(903," \u{1F4C2} "),n(904,"code"),e(905,"features/typescript-lab/ts-exercises.ts"),t(),e(906," \u2014 Ejercicios con keyof y tipos derivados "),t()(),n(907,"div",8)(908,"h3"),e(909,"\u{1F537} 7. Conditional Types e infer"),t(),n(910,"p"),e(911," Un conditional type elige entre dos tipos con la sintaxis "),n(912,"code"),e(913,"T extends U ? X : Y"),t(),e(914,". Con "),n(915,"code"),e(916,"infer"),t(),e(917,' se "captura" una parte del tipo comparado (el retorno de una funci\xF3n, el elemento de un array, el payload de una promesa). Adem\xE1s, sobre uniones los conditional types son '),n(918,"strong"),e(919,"distributivos"),t(),e(920,": se eval\xFAan miembro a miembro. "),t(),n(921,"pre")(922,"code"),e(923,`// Conditional b\xE1sico
type IsString<T> = T extends string ? true : false;
type A = IsString<'hola'>; // true
type B = IsString<42>;     // false

// infer \u2014 capturar tipos internos
type ElementOf<T> = T extends (infer E)[] ? E : never;
type Num = ElementOf<number[]>; // number

type MyReturnType<T> =
  T extends (...args: any[]) => infer R ? R : never;

type UnwrapPromise<T> = T extends Promise<infer V> ? V : T;
type V = UnwrapPromise<Promise<Product>>; // Product
type W = UnwrapPromise<string>;            // string (rama else)

// Distributividad: se aplica a cada miembro de la union
type ToArray<T> = T extends any ? T[] : never;
type Arrays = ToArray<string | number>;
// string[] | number[]  (\xA1no (string | number)[]!)

// As\xED funciona Exclude:
type MyExclude<T, U> = T extends U ? never : T;
type SinId = MyExclude<'id' | 'name' | 'price', 'id'>;
// 'name' | 'price' \u2014 never desaparece de las uniones

// Desactivar la distribuci\xF3n envolviendo en tupla
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;
type OneArray = ToArrayNonDist<string | number>;
// (string | number)[]`),t()(),n(924,"h4"),e(925,"\u2705 Mejores pr\xE1cticas"),t(),n(926,"ul")(927,"li")(928,"strong"),e(929,"Empieza por los utility types integrados"),t(),e(930," ("),n(931,"code"),e(932,"ReturnType"),t(),e(933,", "),n(934,"code"),e(935,"Awaited"),t(),e(936,", "),n(937,"code"),e(938,"Exclude"),t(),e(939,"...): casi todos son conditional types de una l\xEDnea; escribe los tuyos solo si no existe uno. "),t(),n(940,"li")(941,"strong"),e(942,"Devuelve "),n(943,"code"),e(944,"never"),t(),e(945," en la rama imposible:"),t(),e(946," en uniones, "),n(947,"code"),e(948,"never"),t(),e(949," se absorbe, lo que convierte el conditional en un filtro. "),t(),n(950,"li")(951,"strong"),e(952,"Nombra los "),n(953,"code"),e(954,"infer"),t(),e(955,":"),t(),n(956,"code"),e(957,"infer TElement"),t(),e(958," se lee mejor que "),n(959,"code"),e(960,"infer E"),t(),e(961," en tipos largos. "),t()(),n(962,"h4"),e(963,"\u26A0\uFE0F Errores comunes"),t(),n(964,"ul")(965,"li")(966,"strong"),e(967,"Olvidar la distributividad:"),t(),e(968,' con un "naked type parameter" a la izquierda de '),n(969,"code"),e(970,"extends"),t(),e(971,", la uni\xF3n se procesa miembro a miembro. Si no lo quieres, envuelve: "),n(972,"code"),e(973,"[T] extends [U]"),t(),e(974,". "),t(),n(975,"li")(976,"strong")(977,"code"),e(978,"never"),t(),e(979," como entrada:"),t(),e(980," un conditional distributivo sobre "),n(981,"code"),e(982,"never"),t(),e(983," devuelve "),n(984,"code"),e(985,"never"),t(),e(986," directamente (uni\xF3n vac\xEDa), sin evaluar ninguna rama. Sorprende en tipos recursivos. "),t(),n(987,"li")(988,"strong"),e(989,"Usar "),n(990,"code"),e(991,"infer"),t(),e(992," fuera de un conditional:"),t(),e(993," solo es v\xE1lido dentro de la cl\xE1usula "),n(994,"code"),e(995,"extends"),t(),e(996," de un conditional type. "),t()(),n(997,"h4"),e(998,"\u{1F3A4} Preguntas de entrevista"),t(),n(999,"ul")(1e3,"li")(1001,"strong"),e(1002,"\xBFQu\xE9 es "),n(1003,"code"),e(1004,"infer"),t(),e(1005,"?"),t(),n(1006,"em"),e(1007,"R:"),t(),e(1008," Un keyword que declara una variable de tipo dentro del patr\xF3n de un conditional type, capturando la parte que encaje: "),n(1009,"code"),e(1010,"T extends Promise<infer V> ? V : never"),t(),e(1011,". "),t(),n(1012,"li")(1013,"strong"),e(1014,"\xBFQu\xE9 es un conditional type distributivo?"),t(),n(1015,"em"),e(1016,"R:"),t(),e(1017," Cuando el operando izquierdo es un par\xE1metro de tipo desnudo, el conditional se aplica a cada miembro de la uni\xF3n y los resultados se re-unen. Es la base de "),n(1018,"code"),e(1019,"Exclude"),t(),e(1020,"/"),n(1021,"code"),e(1022,"Extract"),t(),e(1023,". "),t(),n(1024,"li")(1025,"strong"),e(1026,"Implementa "),n(1027,"code"),e(1028,"Extract"),t(),e(1029,"."),t(),n(1030,"em"),e(1031,"R:"),t(),n(1032,"code"),e(1033,"type Extract<T, U> = T extends U ? T : never;"),t(),e(1034," \u2014 lo contrario de "),n(1035,"code"),e(1036,"Exclude"),t(),e(1037,". "),t()()(),n(1038,"div",9)(1039,"h3"),e(1040,"\u{1F537} 8. Template Literal Types"),t(),n(1041,"p"),e(1042," Los template literal types construyen tipos string combinando literales y uniones, con la misma sintaxis que los template strings. Al combinar uniones se genera el "),n(1043,"strong"),e(1044,"producto cartesiano"),t(),e(1045," de todas las combinaciones. Junto con "),n(1046,"code"),e(1047,"Uppercase"),t(),e(1048,", "),n(1049,"code"),e(1050,"Lowercase"),t(),e(1051,", "),n(1052,"code"),e(1053,"Capitalize"),t(),e(1054," y "),n(1055,"code"),e(1056,"Uncapitalize"),t(),e(1057," permiten tipar convenciones de nombres. "),t(),n(1058,"pre")(1059,"code"),e(1060,`type Size = 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'danger';

// Producto cartesiano: 6 combinaciones
type ButtonClass = \\\`btn-\${Variant}-\${Size}\\\`;
// 'btn-primary-sm' | 'btn-primary-md' | ... | 'btn-danger-lg'

// Tipar rutas de API
type Entity = 'products' | 'users';
type ApiRoute = \\\`/api/\${Entity}\\\` | \\\`/api/\${Entity}/\${string}\\\`;

const ok: ApiRoute = '/api/products/42'; // \u2705
// const bad: ApiRoute = '/api/orders';  // \u274C

// Eventos tipados a partir de propiedades
type ChangeEvents<T> = {
  [K in keyof T as \\\`\${string & K}Changed\\\`]: (value: T[K]) => void;
};
type ProductEvents = ChangeEvents<{ name: string; price: number }>;
// { nameChanged: (v: string) => void; priceChanged: (v: number) => void }

// Parsear strings con infer + template literals
type RouteParam<T> =
  T extends \\\`\${string}:\${infer P}\\\` ? P : never;
type Param = RouteParam<'/products/:productId'>; // 'productId'

// Intrinsics de manipulaci\xF3n
type Method = 'get' | 'post';
type HandlerName = \\\`on\${Capitalize<Method>}\\\`; // 'onGet' | 'onPost'`),t()(),n(1061,"h4"),e(1062,"\u2705 Mejores pr\xE1cticas"),t(),n(1063,"ul")(1064,"li")(1065,"strong"),e(1066,"\xDAsalos para contratos de strings estructurados:"),t(),e(1067," rutas, claves de i18n, nombres de eventos, clases CSS con convenci\xF3n. El autocompletado y la validaci\xF3n gratis compensan la complejidad. "),t(),n(1068,"li")(1069,"strong")(1070,"code"),e(1071,"${string}"),t(),e(1072," como comod\xEDn:"),t(),e(1073,' permite "cualquier string aqu\xED" dentro de un patr\xF3n, evitando enumerar infinitos valores. '),t(),n(1074,"li")(1075,"strong"),e(1076,"Vigila el tama\xF1o de las combinaciones:"),t(),e(1077," uniones grandes multiplicadas explotan (l\xEDmites del compilador y lentitud del editor). "),t()(),n(1078,"h4"),e(1079,"\u26A0\uFE0F Errores comunes"),t(),n(1080,"ul")(1081,"li")(1082,"strong"),e(1083,"Esperar validaci\xF3n en runtime:"),t(),e(1084," los template literal types solo restringen valores conocidos en compile-time; un string que llega de una API sigue necesitando validaci\xF3n. "),t(),n(1085,"li")(1086,"strong"),e(1087,"Modelar gram\xE1ticas complejas:"),t(),e(1088," parsear URLs completas o SQL con tipos recursivos es un ejercicio interesante pero suele ser inmantenible en producci\xF3n. "),t()(),n(1089,"h4"),e(1090,"\u{1F3A4} Preguntas de entrevista"),t(),n(1091,"ul")(1092,"li")(1093,"strong"),e(1094,"\xBFQu\xE9 produce "),n(1095,"code"),e(1096,"\\`${A}-${B}\\`"),t(),e(1097," si A y B son uniones?"),t(),n(1098,"em"),e(1099,"R:"),t(),e(1100," La uni\xF3n de todas las combinaciones (producto cartesiano). "),t(),n(1101,"li")(1102,"strong"),e(1103,"\xBFC\xF3mo extraer\xEDas el par\xE1metro de una ruta tipo "),n(1104,"code"),e(1105,"'/user/:id'"),t(),e(1106,"?"),t(),n(1107,"em"),e(1108,"R:"),t(),e(1109," Con un conditional type que combine template literal e "),n(1110,"code"),e(1111,"infer"),t(),e(1112,": "),n(1113,"code"),e(1114,"T extends \\`${string}:${infer P}\\` ? P : never"),t(),e(1115,". "),t()()(),n(1116,"div",10)(1117,"h3"),e(1118,"\u{1F537} 9. unknown vs any vs never"),t(),n(1119,"p"),e(1120," Tres tipos especiales que marcan los extremos del sistema: "),n(1121,"code"),e(1122,"any"),t(),e(1123," desactiva el chequeo (todo vale, en ambas direcciones), "),n(1124,"code"),e(1125,"unknown"),t(),e(1126,' es el "top type" seguro (todo es asignable a \xE9l, pero \xE9l no es asignable a nada sin narrowing) y '),n(1127,"code"),e(1128,"never"),t(),e(1129,' es el "bottom type": no tiene valores posibles y representa c\xF3digo inalcanzable. '),t(),n(1130,"pre")(1131,"code"),e(1132,`// any \u2014 contagioso y peligroso
let a: any = JSON.parse('{"x":1}');
a.foo.bar.baz;        // compila... y explota en runtime
const n: number = a;  // compila sin queja

// unknown \u2014 obliga a validar antes de usar
let u: unknown = JSON.parse('{"x":1}');
// u.x;               // \u274C error: primero hay que estrechar
if (typeof u === 'object' && u !== null && 'x' in u) {
  console.log((u as { x: number }).x); // \u2705 tras validar
}

// never \u2014 funciones que no retornan y ramas imposibles
function fail(msg: string): never {
  throw new Error(msg);
}

type Status = 'on' | 'off';
function toggle(s: Status) {
  if (s === 'on') return 'off';
  if (s === 'off') return 'on';
  const imposible: never = s; // \u2705 s ya no tiene miembros posibles
  return imposible;
}

// never se absorbe en uniones y anula intersecciones
type U = string | never;  // string
type I = string & never;  // never

// Firma segura para errores de catch (TS 4.4+: useUnknownInCatchVariables)
try {
  riskyOperation();
} catch (err: unknown) {
  if (err instanceof Error) console.error(err.message);
}`),t()(),n(1133,"h4"),e(1134,"\u2705 Mejores pr\xE1cticas"),t(),n(1135,"ul")(1136,"li")(1137,"strong")(1138,"code"),e(1139,"unknown"),t(),e(1140," en los bordes:"),t(),e(1141," APIs externas, "),n(1142,"code"),e(1143,"JSON.parse"),t(),e(1144,", par\xE1metros de librer\xEDas gen\xE9ricas y variables de "),n(1145,"code"),e(1146,"catch"),t(),e(1147,". Obliga a validar exactamente una vez. "),t(),n(1148,"li")(1149,"strong")(1150,"code"),e(1151,"never"),t(),e(1152," como herramienta de dise\xF1o:"),t(),e(1153," exhaustive checks, prohibir propiedades ("),n(1154,"code"),e(1155,"{ id?: never }"),t(),e(1156,") y filtrar en mapped/conditional types. "),t(),n(1157,"li")(1158,"strong")(1159,"code"),e(1160,"any"),t(),e(1161," solo como \xFAltimo recurso documentado"),t(),e(1162," (migraciones, tipos de librer\xEDas rotos), idealmente encapsulado en una funci\xF3n peque\xF1a con firma bien tipada. "),t()(),n(1163,"h4"),e(1164,"\u26A0\uFE0F Errores comunes"),t(),n(1165,"ul")(1166,"li")(1167,"strong")(1168,"code"),e(1169,"any"),t(),e(1170," se propaga:"),t(),e(1171," una expresi\xF3n "),n(1172,"code"),e(1173,"any"),t(),e(1174," convierte en "),n(1175,"code"),e(1176,"any"),t(),e(1177," casi todo lo que toca, desactivando el chequeo silenciosamente aguas abajo. "),t(),n(1178,"li")(1179,"strong"),e(1180,"Doble cast "),n(1181,"code"),e(1182,"as unknown as T"),t(),e(1183,":"),t(),e(1184," es un "),n(1185,"code"),e(1186,"any"),t(),e(1187," disfrazado; si lo necesitas, deja un comentario del porqu\xE9 o escribe un type guard. "),t(),n(1188,"li")(1189,"strong"),e(1190,"Confundir "),n(1191,"code"),e(1192,"never"),t(),e(1193," con "),n(1194,"code"),e(1195,"void"),t(),e(1196,":"),t(),n(1197,"code"),e(1198,"void"),t(),e(1199,' es "retorna sin valor \xFAtil"; '),n(1200,"code"),e(1201,"never"),t(),e(1202,' es "no retorna jam\xE1s" (lanza o bucle infinito). '),t()(),n(1203,"h4"),e(1204,"\u{1F3A4} Preguntas de entrevista"),t(),n(1205,"ul")(1206,"li")(1207,"strong"),e(1208,"\xBFPor qu\xE9 "),n(1209,"code"),e(1210,"unknown"),t(),e(1211," es m\xE1s seguro que "),n(1212,"code"),e(1213,"any"),t(),e(1214,"?"),t(),n(1215,"em"),e(1216,"R:"),t(),e(1217," Ambos aceptan cualquier valor, pero "),n(1218,"code"),e(1219,"unknown"),t(),e(1220," no permite ninguna operaci\xF3n hasta estrecharlo; "),n(1221,"code"),e(1222,"any"),t(),e(1223," permite todas sin comprobar nada. "),t(),n(1224,"li")(1225,"strong"),e(1226,"\xBFCu\xE1ndo aparece "),n(1227,"code"),e(1228,"never"),t(),e(1229," por inferencia?"),t(),n(1230,"em"),e(1231,"R:"),t(),e(1232," En ramas donde el narrowing agot\xF3 todos los miembros de una uni\xF3n, en "),n(1233,"code"),e(1234,"Exclude"),t(),e(1235," total, y como retorno de funciones que siempre lanzan. "),t(),n(1236,"li")(1237,"strong"),e(1238,"\xBFQu\xE9 es un top type y un bottom type?"),t(),n(1239,"em"),e(1240,"R:"),t(),e(1241," Top ("),n(1242,"code"),e(1243,"unknown"),t(),e(1244,"): supertipo de todos, todo es asignable a \xE9l. Bottom ("),n(1245,"code"),e(1246,"never"),t(),e(1247,"): subtipo de todos, asignable a cualquier cosa, pero nada es asignable a \xE9l. "),t()()(),n(1248,"div",11)(1249,"h3"),e(1250,"\u{1F537} 10. Type Narrowing y Control Flow Analysis"),t(),n(1251,"p"),e(1252," TypeScript re-analiza el tipo de cada variable "),n(1253,"em"),e(1254,"en cada punto del c\xF3digo"),t(),e(1255," siguiendo el flujo de control: "),n(1256,"code"),e(1257,"if"),t(),e(1258,", "),n(1259,"code"),e(1260,"return"),t(),e(1261," tempranos, "),n(1262,"code"),e(1263,"throw"),t(),e(1264,', asignaciones, comparaciones de igualdad y truthiness. Entender este an\xE1lisis explica por qu\xE9 a veces "TS ya sabe" el tipo y por qu\xE9 a veces lo "olvida". '),t(),n(1265,"pre")(1266,"code"),e(1267,`function format(value: string | number | null) {
  if (value === null) return '\u2014';   // elimina null
  // value: string | number

  if (typeof value === 'number') {
    return value.toFixed(2);        // value: number
  }
  return value.toUpperCase();       // value: string
}

// Narrowing por igualdad entre variables
function pick(a: string | number, b: string | boolean) {
  if (a === b) {
    // Ambos solo pueden ser el tipo com\xFAn: string
    a.toUpperCase();
    b.toUpperCase();
  }
}

// Truthiness: cuidado con '' y 0
function greet(name?: string) {
  if (name) {
    return \\\`Hola \${name}\\\`; // excluye undefined... y tambi\xE9n ''
  }
  return 'Hola an\xF3nimo';
}

// Asignaci\xF3n re-estrecha el tipo declarado
let x: string | number = 'hola';
x.toUpperCase(); // x: string (por la asignaci\xF3n)
x = 42;
x.toFixed();     // x: number

// L\xEDmite cl\xE1sico: callbacks pierden el narrowing
function process(id: string | null) {
  if (id !== null) {
    [1, 2, 3].forEach(() => {
      // id vuelve a ser string | null dentro del callback (si id es mutable)
      // porque TS no sabe cu\xE1ndo se ejecutar\xE1
    });
  }
}
// Soluci\xF3n: const local \u2192 const safeId = id;`),t()(),n(1268,"h4"),e(1269,"\u2705 Mejores pr\xE1cticas"),t(),n(1270,"ul")(1271,"li")(1272,"strong"),e(1273,"Early returns:"),t(),e(1274," descartar casos inv\xE1lidos al principio ("),n(1275,"code"),e(1276,"if (!user) return;"),t(),e(1277,") deja el resto de la funci\xF3n con tipos limpios y sin anidamiento. "),t(),n(1278,"li")(1279,"strong"),e(1280,"Prefiere "),n(1281,"code"),e(1282,"const"),t(),e(1283,":"),t(),e(1284," el narrowing sobre "),n(1285,"code"),e(1286,"const"),t(),e(1287," se conserva dentro de closures; sobre "),n(1288,"code"),e(1289,"let"),t(),e(1290," se descarta. "),t(),n(1291,"li")(1292,"strong"),e(1293,"Compara con expl\xEDcitos "),n(1294,"code"),e(1295,"!== null"),t(),e(1296," / "),n(1297,"code"),e(1298,"!== undefined"),t()(),e(1299," cuando "),n(1300,"code"),e(1301,"0"),t(),e(1302,", "),n(1303,"code"),e(1304,"''"),t(),e(1305," o "),n(1306,"code"),e(1307,"false"),t(),e(1308," sean valores v\xE1lidos. "),t()(),n(1309,"h4"),e(1310,"\u26A0\uFE0F Errores comunes"),t(),n(1311,"ul")(1312,"li")(1313,"strong"),e(1314,"Narrowing perdido en callbacks:"),t(),e(1315," TS invalida el estrechamiento de variables mutables dentro de funciones anidadas. Copia a una "),n(1316,"code"),e(1317,"const"),t(),e(1318," local antes del callback. "),t(),n(1319,"li")(1320,"strong"),e(1321,"Narrowing sobre propiedades:"),t(),n(1322,"code"),e(1323,"if (obj.prop)"),t(),e(1324," estrecha "),n(1325,"code"),e(1326,"obj.prop"),t(),e(1327,", pero cualquier llamada a funci\xF3n intermedia puede invalidarlo (la funci\xF3n podr\xEDa mutar el objeto). Extrae la propiedad a una variable local. "),t(),n(1328,"li")(1329,"strong"),e(1330,"Abusar de "),n(1331,"code"),e(1332,"!"),t(),e(1333," (non-null assertion):"),t(),n(1334,"code"),e(1335,"user!.name"),t(),e(1336," silencia al compilador sin comprobar nada; si te equivocas, es un "),n(1337,"code"),e(1338,"TypeError"),t(),e(1339," en runtime. "),t()(),n(1340,"h4"),e(1341,"\u{1F3A4} Preguntas de entrevista"),t(),n(1342,"ul")(1343,"li")(1344,"strong"),e(1345,"\xBFQu\xE9 mecanismos de narrowing conoce TypeScript?"),t(),n(1346,"em"),e(1347,"R:"),t(),n(1348,"code"),e(1349,"typeof"),t(),e(1350,", "),n(1351,"code"),e(1352,"instanceof"),t(),e(1353,", "),n(1354,"code"),e(1355,"in"),t(),e(1356,", comparaciones de igualdad, truthiness, discriminantes literales, predicados "),n(1357,"code"),e(1358,"is"),t(),e(1359,", "),n(1360,"code"),e(1361,"asserts"),t(),e(1362," y asignaciones. "),t(),n(1363,"li")(1364,"strong"),e(1365,"\xBFPor qu\xE9 se pierde el narrowing dentro de un callback?"),t(),n(1366,"em"),e(1367,"R:"),t(),e(1368," El compilador no puede garantizar cu\xE1ndo se ejecuta el callback ni que la variable mutable no haya cambiado entre medias, as\xED que revierte al tipo declarado. "),t(),n(1369,"li")(1370,"strong"),e(1371,"\xBFQu\xE9 diferencia hay entre "),n(1372,"code"),e(1373,"?."),t(),e(1374," y "),n(1375,"code"),e(1376,"!"),t(),e(1377,"?"),t(),n(1378,"em"),e(1379,"R:"),t(),n(1380,"code"),e(1381,"?."),t(),e(1382," comprueba en runtime y produce "),n(1383,"code"),e(1384,"undefined"),t(),e(1385," si falta; "),n(1386,"code"),e(1387,"!"),t(),e(1388," solo afirma al compilador que no es null, sin ninguna comprobaci\xF3n real. "),t()()(),n(1389,"div",12)(1390,"h3"),e(1391,"\u{1F537} 11. satisfies Operator"),t(),n(1392,"p")(1393,"code"),e(1394,"satisfies"),t(),e(1395," (TS 4.9+) valida que una expresi\xF3n cumple un tipo "),n(1396,"strong"),e(1397,"sin ensancharla a ese tipo"),t(),e(1398,': el valor conserva su tipo inferido m\xE1s espec\xEDfico. Resuelve el dilema cl\xE1sico entre "anotar el tipo" (pierdes literales) y "no anotar" (pierdes validaci\xF3n). '),t(),n(1399,"pre")(1400,"code"),e(1401,`type Theme = Record<string, string | number[]>;

// \u274C Con anotaci\xF3n: valida, pero pierde los tipos espec\xEDficos
const theme1: Theme = {
  primary: '#1976d2',
  spacing: [4, 8, 16],
};
// theme1.primary \u2192 string | number[] ... hay que estrechar \u{1F615}

// \u274C Sin anotaci\xF3n: tipos espec\xEDficos, pero sin validaci\xF3n
const theme2 = {
  primary: '#1976d2',
  spacng: [4, 8, 16],   // typo sin detectar
};

// \u2705 satisfies: valida contra Theme Y conserva la inferencia
const theme = {
  primary: '#1976d2',
  spacing: [4, 8, 16],
} satisfies Theme;

theme.primary.toUpperCase(); // \u2705 TS sabe que es string
theme.spacing.map((n) => n); // \u2705 TS sabe que es number[]
// theme.spacng ...           // \u274C typo detectado por Theme

// Caso t\xEDpico Angular: configuraci\xF3n de rutas
const routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
] satisfies Routes;

// Con as const para m\xE1xima precisi\xF3n
const config = {
  env: 'production',
  retries: 3,
} as const satisfies { env: string; retries: number };
// config.env: 'production' (literal), validado contra el contrato`),t()(),n(1402,"h4"),e(1403,"\u2705 Mejores pr\xE1cticas"),t(),n(1404,"ul")(1405,"li")(1406,"strong"),e(1407,"Objetos de configuraci\xF3n:"),t(),e(1408," temas, mapas de rutas, diccionarios de handlers... cualquier literal grande que deba cumplir un contrato pero cuyo detalle quieras conservar. "),t(),n(1409,"li")(1410,"strong")(1411,"code"),e(1412,"as const satisfies T"),t(),e(1413,":"),t(),e(1414," combinaci\xF3n potente \u2014 literales inmutables validados contra un contrato. "),t(),n(1415,"li")(1416,"strong"),e(1417,"Prefi\xE9relo sobre "),n(1418,"code"),e(1419,"as"),t(),e(1420,":"),t(),n(1421,"code"),e(1422,"satisfies"),t(),e(1423," comprueba de verdad (falla si no encaja); "),n(1424,"code"),e(1425,"as"),t(),e(1426," fuerza y puede mentir. "),t()(),n(1427,"h4"),e(1428,"\u26A0\uFE0F Errores comunes"),t(),n(1429,"ul")(1430,"li")(1431,"strong"),e(1432,"Confundirlo con una anotaci\xF3n:"),t(),n(1433,"code"),e(1434,"const x: T = ..."),t(),e(1435," cambia el tipo de "),n(1436,"code"),e(1437,"x"),t(),e(1438," a "),n(1439,"code"),e(1440,"T"),t(),e(1441,"; "),n(1442,"code"),e(1443,"satisfies"),t(),e(1444," no cambia el tipo, solo valida. "),t(),n(1445,"li")(1446,"strong"),e(1447,"Usarlo donde hace falta el tipo amplio:"),t(),e(1448," si una variable debe poder reasignarse a otros valores del contrato, necesitas la anotaci\xF3n, no "),n(1449,"code"),e(1450,"satisfies"),t(),e(1451,". "),t()(),n(1452,"h4"),e(1453,"\u{1F3A4} Preguntas de entrevista"),t(),n(1454,"ul")(1455,"li")(1456,"strong"),e(1457,"\xBFQu\xE9 aporta "),n(1458,"code"),e(1459,"satisfies"),t(),e(1460," frente a la anotaci\xF3n de tipo?"),t(),n(1461,"em"),e(1462,"R:"),t(),e(1463," Ambos validan, pero la anotaci\xF3n ensancha el valor al tipo anotado; "),n(1464,"code"),e(1465,"satisfies"),t(),e(1466," conserva el tipo inferido (m\xE1s estrecho), manteniendo literales y claves concretas. "),t(),n(1467,"li")(1468,"strong"),e(1469,"\xBFDiferencia entre "),n(1470,"code"),e(1471,"satisfies"),t(),e(1472," y "),n(1473,"code"),e(1474,"as"),t(),e(1475,"?"),t(),n(1476,"em"),e(1477,"R:"),t(),n(1478,"code"),e(1479,"as"),t(),e(1480," es una aserci\xF3n (puede ocultar errores); "),n(1481,"code"),e(1482,"satisfies"),t(),e(1483," es una comprobaci\xF3n real que falla en compile-time si el valor no cumple el tipo. "),t()()(),n(1484,"div",13)(1485,"h3"),e(1486,"\u{1F537} 12. Const Assertions (as const)"),t(),n(1487,"p")(1488,"code"),e(1489,"as const"),t(),e(1490," le pide al compilador la inferencia m\xE1s literal posible: strings y n\xFAmeros quedan como tipos literales, los objetos se vuelven "),n(1491,"code"),e(1492,"readonly"),t(),e(1493," y los arrays se convierten en tuplas "),n(1494,"code"),e(1495,"readonly"),t(),e(1496,". Es la forma idiom\xE1tica de declarar constantes de las que luego se "),n(1497,"em"),e(1498,"derivan"),t(),e(1499," tipos. "),t(),n(1500,"pre")(1501,"code"),e(1502,`// Sin as const: TS ensancha a tipos generales
const config1 = { env: 'prod', port: 3000 };
// { env: string; port: number }

// Con as const: literales + readonly
const config = { env: 'prod', port: 3000 } as const;
// { readonly env: 'prod'; readonly port: 3000 }

// Patr\xF3n estrella: derivar una union de un array
const STATUSES = ['idle', 'loading', 'success', 'error'] as const;
type Status = typeof STATUSES[number];
// 'idle' | 'loading' | 'success' | 'error'

// Una sola fuente de verdad: el array sirve en runtime
// (validaciones, @for en templates) y el tipo se deriva gratis
function isStatus(v: string): v is Status {
  return (STATUSES as readonly string[]).includes(v);
}

// Objeto como enum: claves y valores tipados
const HTTP_STATUS = {
  OK: 200,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
} as const;
type HttpStatusCode = typeof HTTP_STATUS[keyof typeof HTTP_STATUS];
// 200 | 404 | 500

// Tuplas exactas para retornos m\xFAltiples
function useCounter() {
  let count = 0;
  const inc = () => count++;
  return [count, inc] as const; // readonly [number, () => void]
}
const [value, increment] = useCounter(); // tipos correctos por posici\xF3n`),t()(),n(1503,"h4"),e(1504,"\u2705 Mejores pr\xE1cticas"),t(),n(1505,"ul")(1506,"li")(1507,"strong"),e(1508,"Array "),n(1509,"code"),e(1510,"as const"),t(),e(1511," + "),n(1512,"code"),e(1513,"typeof arr[number]"),t(),e(1514,":"),t(),e(1515," una lista de valores con su union derivada, sin duplicar nada. Ideal para opciones de selects, estados y cat\xE1logos peque\xF1os. "),t(),n(1516,"li")(1517,"strong"),e(1518,"Constantes de configuraci\xF3n:"),t(),n(1519,"code"),e(1520,"as const"),t(),e(1521," documenta la inmutabilidad y habilita narrowing preciso donde se usen. "),t(),n(1522,"li")(1523,"strong"),e(1524,"Comb\xEDnalo con "),n(1525,"code"),e(1526,"satisfies"),t()(),e(1527," cuando adem\xE1s haya un contrato que cumplir. "),t()(),n(1528,"h4"),e(1529,"\u26A0\uFE0F Errores comunes"),t(),n(1530,"ul")(1531,"li")(1532,"strong"),e(1533,"Readonly solo en compile-time:"),t(),n(1534,"code"),e(1535,"as const"),t(),e(1536," no congela el objeto en runtime ("),n(1537,"code"),e(1538,"Object.freeze"),t(),e(1539," s\xED). "),t(),n(1540,"li")(1541,"strong"),e(1542,"Aplicarlo a valores din\xE1micos:"),t(),e(1543," solo tiene sentido sobre literales; sobre una variable calculada no puede inferir literales. "),t(),n(1544,"li")(1545,"strong"),e(1546,"Tuplas readonly vs arrays:"),t(),e(1547," una funci\xF3n que espera "),n(1548,"code"),e(1549,"string[]"),t(),e(1550," no acepta "),n(1551,"code"),e(1552,"readonly string[]"),t(),e(1553,"; ajusta las firmas para aceptar "),n(1554,"code"),e(1555,"readonly"),t(),e(1556," cuando no mutes. "),t()(),n(1557,"h4"),e(1558,"\u{1F3A4} Preguntas de entrevista"),t(),n(1559,"ul")(1560,"li")(1561,"strong"),e(1562,"\xBFQu\xE9 hace exactamente "),n(1563,"code"),e(1564,"as const"),t(),e(1565,"?"),t(),n(1566,"em"),e(1567,"R:"),t(),e(1568," Inferencia literal (no widening), propiedades "),n(1569,"code"),e(1570,"readonly"),t(),e(1571," y arrays como tuplas "),n(1572,"code"),e(1573,"readonly"),t(),e(1574,", aplicado recursivamente. "),t(),n(1575,"li")(1576,"strong"),e(1577,"\xBFQu\xE9 significa "),n(1578,"code"),e(1579,"typeof STATUSES[number]"),t(),e(1580,"?"),t(),n(1581,"em"),e(1582,"R:"),t(),e(1583," Indexed access sobre el tipo del array con \xEDndice "),n(1584,"code"),e(1585,"number"),t(),e(1586,": la uni\xF3n de los tipos de todos sus elementos. "),t()()(),n(1587,"div",14)(1588,"h3"),e(1589,"\u{1F537} 13. Enums vs Union Types"),t(),n(1590,"p"),e(1591," Los "),n(1592,"code"),e(1593,"enum"),t(),e(1594," de TypeScript generan c\xF3digo en runtime y tienen sem\xE1nticas sorprendentes; la comunidad (y la documentaci\xF3n oficial) tiende a preferir "),n(1595,"strong"),e(1596,"uniones de literales"),t(),e(1597," u objetos "),n(1598,"code"),e(1599,"as const"),t(),e(1600,", que ofrecen la misma seguridad sin coste ni sorpresas. De hecho, el flag "),n(1601,"code"),e(1602,"--erasableSyntaxOnly"),t(),e(1603," (TS 5.8) proh\xEDbe los enums cl\xE1sicos por no ser sintaxis borrable. "),t(),n(1604,"pre")(1605,"code"),e(1606,`// \u274C enum num\xE9rico: inseguro y con reverse mapping
enum Level { Low, Medium, High }
const l: Level = 99 as Level;  // n\xFAmeros arbitrarios cuelan (pre TS 5.0 sin cast)
console.log(Level[0]);          // 'Low' \u2014 genera objeto doble en runtime

// \u26A0\uFE0F enum de strings: mejor, pero es nominal
enum Status { Active = 'active', Inactive = 'inactive' }
// acceptsStatus('active');    // \u274C hay que escribir Status.Active
// no acepta el literal equivalente

// \u2705 Union de literales: cero runtime, estructural
type OrderStatus = 'pending' | 'paid' | 'shipped';
function setStatus(s: OrderStatus) { /* ... */ }
setStatus('paid');              // \u2705 literal directo, con autocompletado

// \u2705 Objeto as const cuando necesitas los valores en runtime
const OrderStatus = {
  Pending: 'pending',
  Paid: 'paid',
  Shipped: 'shipped',
} as const;
type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];
// El type y el objeto pueden compartir nombre (declaration merging valor/tipo)

Object.values(OrderStatus);     // iterable en runtime, como un enum
setStatus(OrderStatus.Paid);    // estilo enum
setStatus('shipped');           // o literal directo \u2014 ambos valen`),t()(),n(1607,"h4"),e(1608,"\u2705 Mejores pr\xE1cticas"),t(),n(1609,"ul")(1610,"li")(1611,"strong"),e(1612,"Por defecto, union de literales:"),t(),e(1613," gratis en runtime, estructural, serializable tal cual (coincide con lo que env\xEDa el backend). "),t(),n(1614,"li")(1615,"strong"),e(1616,"Objeto "),n(1617,"code"),e(1618,"as const"),t()(),e(1619," si adem\xE1s necesitas iterar los valores o un namespace con autocompletado ("),n(1620,"code"),e(1621,"OrderStatus.Paid"),t(),e(1622,"). "),t(),n(1623,"li")(1624,"strong"),e(1625,"Si usas enums, que sean de strings:"),t(),e(1626," los num\xE9ricos heredan los problemas de reverse mapping y valores fuera de rango. Evita "),n(1627,"code"),e(1628,"const enum"),t(),e(1629," en librer\xEDas (problemas con "),n(1630,"code"),e(1631,"isolatedModules"),t(),e(1632,"). "),t()(),n(1633,"h4"),e(1634,"\u26A0\uFE0F Errores comunes"),t(),n(1635,"ul")(1636,"li")(1637,"strong"),e(1638,"Comparar enums de strings con literales:"),t(),n(1639,"code"),e(1640,"status === 'active'"),t(),e(1641," falla con enum nominal; con uniones funciona de forma natural. "),t(),n(1642,"li")(1643,"strong"),e(1644,"Enums en templates Angular:"),t(),e(1645," hay que exponer el enum como propiedad del componente para usarlo en el HTML; con uniones se comparan literales directamente. "),t(),n(1646,"li")(1647,"strong"),e(1648,"Olvidar que los enums generan JS:"),t(),e(1649," aumentan el bundle y no se tree-shakean bien si se usan parcialmente. "),t()(),n(1650,"h4"),e(1651,"\u{1F3A4} Preguntas de entrevista"),t(),n(1652,"ul")(1653,"li")(1654,"strong"),e(1655,"\xBFPor qu\xE9 se suelen preferir uniones sobre enums?"),t(),n(1656,"em"),e(1657,"R:"),t(),e(1658," No generan c\xF3digo, son estructurales (aceptan el literal directamente), serializan igual que se declaran y funcionan mejor con narrowing y APIs externas. "),t(),n(1659,"li")(1660,"strong"),e(1661,"\xBFCu\xE1ndo tiene sentido un enum?"),t(),n(1662,"em"),e(1663,"R:"),t(),e(1664," Interoperabilidad con c\xF3digo existente que ya los usa, o preferencia de equipo por el namespace "),n(1665,"code"),e(1666,"Enum.Member"),t(),e(1667,"; el objeto "),n(1668,"code"),e(1669,"as const"),t(),e(1670," cubre ese caso sin los inconvenientes. "),t(),n(1671,"li")(1672,"strong"),e(1673,"\xBFQu\xE9 es el reverse mapping?"),t(),n(1674,"em"),e(1675,"R:"),t(),e(1676," Los enums num\xE9ricos generan un objeto con mapeo doble ("),n(1677,"code"),e(1678,"Level[0] === 'Low'"),t(),e(1679," y "),n(1680,"code"),e(1681,"Level.Low === 0"),t(),e(1682,"); los de strings no lo tienen. "),t()()(),n(1683,"div",15)(1684,"h3"),e(1685,"\u{1F537} 14. Interfaces vs Types y Declaration Merging"),t(),n(1686,"p")(1687,"code"),e(1688,"interface"),t(),e(1689," y "),n(1690,"code"),e(1691,"type"),t(),e(1692," se solapan en el 90% de los casos, pero difieren en puntos clave: las interfaces admiten "),n(1693,"strong"),e(1694,"declaration merging"),t(),e(1695," (varias declaraciones con el mismo nombre se fusionan) y "),n(1696,"code"),e(1697,"extends"),t(),e(1698,"; los type aliases pueden nombrar "),n(1699,"em"),e(1700,"cualquier"),t(),e(1701," tipo (uniones, tuplas, mapped, conditional, primitivos) y no se fusionan. "),t(),n(1702,"pre")(1703,"code"),e(1704,`// interface: extends + merging
interface Animal { name: string; }
interface Dog extends Animal { bark(): void; }

// Declaration merging: ambas declaraciones se fusionan
interface Window { analytics: AnalyticsClient; }
// Ahora window.analytics est\xE1 tipado globalmente
// (as\xED se "parchean" librer\xEDas y objetos globales)

// type: puede nombrar lo que interface no puede
type Id = string | number;                  // union
type Pair = [x: number, y: number];        // tupla nombrada
type Callback = (e: Event) => void;        // funci\xF3n (tambi\xE9n con interface)
type ReadonlyProduct = Readonly<Product>;  // mapped / utility
type Key = \\\`item-\${number}\\\`;         // template literal

// Ambos se combinan sin problema
type WithTimestamps = { createdAt: Date; updatedAt: Date };
interface ProductEntity extends Animal { }   // interface extends interface
type FullProduct = Product & WithTimestamps; // intersecci\xF3n con type

// \u274C type no se fusiona:
// type User = { a: 1 };
// type User = { b: 2 };  // Error: duplicate identifier

// M\xF3dulo augmentation (merging aplicado a librer\xEDas)
declare module '@angular/core' {
  // a\xF1adir tipos a un m\xF3dulo existente
}`),t()(),n(1705,"h4"),e(1706,"\u2705 Mejores pr\xE1cticas"),t(),n(1707,"ul")(1708,"li")(1709,"strong"),e(1710,"Elige uno como convenci\xF3n de equipo y s\xE9 consistente."),t(),e(1711," Una gu\xEDa habitual: "),n(1712,"code"),e(1713,"interface"),t(),e(1714," para formas de objetos p\xFAblicos y contratos extensibles; "),n(1715,"code"),e(1716,"type"),t(),e(1717," para uniones, tuplas, funciones y tipos derivados. "),t(),n(1718,"li")(1719,"strong"),e(1720,"Usa merging deliberadamente:"),t(),e(1721," es la herramienta correcta para aumentar tipos de terceros ("),n(1722,"code"),e(1723,"Window"),t(),e(1724,", m\xF3dulos de npm), pero dentro de tu propio c\xF3digo resulta confuso \u2014 prefiere "),n(1725,"code"),e(1726,"extends"),t(),e(1727,". "),t(),n(1728,"li")(1729,"strong"),e(1730,"Los errores de interfaces suelen ser m\xE1s legibles"),t(),e(1731," (se muestra el nombre, no la expansi\xF3n completa), \xFAtil en APIs p\xFAblicas. "),t()(),n(1732,"h4"),e(1733,"\u26A0\uFE0F Errores comunes"),t(),n(1734,"ul")(1735,"li")(1736,"strong"),e(1737,"Merging accidental:"),t(),e(1738," dos "),n(1739,"code"),e(1740,"interface User"),t(),e(1741," en el mismo scope se fusionan en silencio; con "),n(1742,"code"),e(1743,"type"),t(),e(1744," obtendr\xEDas un error de duplicado. En archivos sin "),n(1745,"code"),e(1746,"import/export"),t(),e(1747," (scripts globales) esto sorprende especialmente. "),t(),n(1748,"li")(1749,"strong"),e(1750,'Intentar "extender" una union con interface:'),t(),n(1751,"code"),e(1752,"interface X extends A | B"),t(),e(1753," no es v\xE1lido; las uniones solo se manejan con "),n(1754,"code"),e(1755,"type"),t(),e(1756,". "),t(),n(1757,"li")(1758,"strong"),e(1759,"Augmentar un m\xF3dulo sin importar nada de \xE9l:"),t(),e(1760," el "),n(1761,"code"),e(1762,"declare module"),t(),e(1763," se interpreta como declaraci\xF3n nueva en vez de augmentation. Debe haber al menos un import del m\xF3dulo. "),t()(),n(1764,"h4"),e(1765,"\u{1F3A4} Preguntas de entrevista"),t(),n(1766,"ul")(1767,"li")(1768,"strong"),e(1769,"\xBFDiferencias entre interface y type?"),t(),n(1770,"em"),e(1771,"R:"),t(),e(1772," Interface: merging, "),n(1773,"code"),e(1774,"extends"),t(),e(1775,", solo formas de objeto/funci\xF3n. Type: cualquier tipo (uniones, mapped, conditional), sin merging. En rendimiento y capacidades b\xE1sicas son equivalentes. "),t(),n(1776,"li")(1777,"strong"),e(1778,"\xBFQu\xE9 es declaration merging y un uso real?"),t(),n(1779,"em"),e(1780,"R:"),t(),e(1781," La fusi\xF3n de m\xFAltiples declaraciones del mismo nombre. Uso t\xEDpico: augmentar "),n(1782,"code"),e(1783,"Window"),t(),e(1784," o los tipos de una librer\xEDa (por ejemplo, a\xF1adir matchers custom a Jest/Vitest). "),t()()(),n(1785,"div",16)(1786,"h3"),e(1787,"\u{1F537} 15. Strict Mode y tsconfig"),t(),n(1788,"p")(1789,"code"),e(1790,'"strict": true'),t(),e(1791," activa la familia de flags estrictos y es la base de cualquier proyecto serio (Angular CLI lo activa por defecto). Cada flag elimina una clase de bugs en compile-time. Conviene conocer qu\xE9 hace cada uno y qu\xE9 flags extra valen la pena. "),t(),n(1792,"pre")(1793,"code"),e(1794,`// tsconfig.json (extracto del proyecto)
{
  "compilerOptions": {
    "strict": true,                    // activa todos los flags strict*
    // Incluye, entre otros:
    // strictNullChecks \u2014 null/undefined dejan de ser asignables a todo
    // noImplicitAny \u2014 par\xE1metros sin tipo inferible son error
    // strictFunctionTypes \u2014 par\xE1metros de funciones contravariantes
    // strictPropertyInitialization \u2014 propiedades de clase inicializadas
    // useUnknownInCatchVariables \u2014 catch (e: unknown)

    "noImplicitReturns": true,         // toda rama debe retornar
    "noImplicitOverride": true,        // override expl\xEDcito al sobrescribir
    "noUncheckedIndexedAccess": true,  // index signatures devuelven T | undefined
    "noFallthroughCasesInSwitch": true
  }
}

// strictNullChecks en acci\xF3n
function findProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
const prod = findProduct('1');
// prod.name;              // \u274C posiblemente undefined
if (prod) prod.name;       // \u2705 narrowing
prod?.name;                // \u2705 optional chaining
prod ?? DEFAULT_PRODUCT;   // \u2705 nullish coalescing

// noUncheckedIndexedAccess
const dict: Record<string, number> = { a: 1 };
const v = dict['b'];       // v: number | undefined (\xA1honesto!)
const arr = [1, 2, 3];
const first = arr[0];      // number | undefined \u2014 obliga a comprobar`),t()(),n(1795,"h4"),e(1796,"\u2705 Mejores pr\xE1cticas"),t(),n(1797,"ul")(1798,"li")(1799,"strong"),e(1800,"Nunca desactives "),n(1801,"code"),e(1802,"strict"),t(),e(1803," en proyectos nuevos."),t(),e(1804," En migraciones, act\xEDvalo flag a flag y usa "),n(1805,"code"),e(1806,"// @ts-expect-error"),t(),e(1807," (que caduca: falla si el error desaparece) en vez de "),n(1808,"code"),e(1809,"// @ts-ignore"),t(),e(1810,". "),t(),n(1811,"li")(1812,"strong"),e(1813,"A\xF1ade "),n(1814,"code"),e(1815,"noUncheckedIndexedAccess"),t(),e(1816,":"),t(),e(1817," no viene en "),n(1818,"code"),e(1819,"strict"),t(),e(1820," y es de los flags con mejor ratio coste/beneficio \u2014 hace honesto el acceso por \xEDndice. "),t(),n(1821,"li")(1822,"strong"),e(1823,"En Angular, activa tambi\xE9n "),n(1824,"code"),e(1825,"strictTemplates"),t()(),e(1826," (en "),n(1827,"code"),e(1828,"angularCompilerOptions"),t(),e(1829,"): lleva el chequeo estricto a los bindings de los templates. "),t()(),n(1830,"h4"),e(1831,"\u26A0\uFE0F Errores comunes"),t(),n(1832,"ul")(1833,"li")(1834,"strong"),e(1835,"Silenciar "),n(1836,"code"),e(1837,"strictNullChecks"),t(),e(1838," con "),n(1839,"code"),e(1840,"!"),t(),e(1841,":"),t(),e(1842," sembrar non-null assertions devuelve los "),n(1843,"code"),e(1844,"undefined is not an object"),t(),e(1845," que el flag ven\xEDa a evitar. "),t(),n(1846,"li")(1847,"strong")(1848,"code"),e(1849,"strictPropertyInitialization"),t(),e(1850," vs inyecci\xF3n:"),t(),e(1851," en Angular cl\xE1sico se resolv\xEDa con "),n(1852,"code"),e(1853,"!"),t(),e(1854," en "),n(1855,"code"),e(1856,"@Input"),t(),e(1857,"; hoy el patr\xF3n preferido es "),n(1858,"code"),e(1859,"inject()"),t(),e(1860,", inicializadores o inputs con "),n(1861,"code"),e(1862,"input.required<T>()"),t(),e(1863,". "),t(),n(1864,"li")(1865,"strong"),e(1866,"Creer que strict valida en runtime:"),t(),e(1867," los flags solo afectan a la compilaci\xF3n; los datos externos siguen necesitando validaci\xF3n (guards, zod, etc.). "),t()(),n(1868,"h4"),e(1869,"\u{1F3A4} Preguntas de entrevista"),t(),n(1870,"ul")(1871,"li")(1872,"strong"),e(1873,"\xBFQu\xE9 hace "),n(1874,"code"),e(1875,"strictNullChecks"),t(),e(1876,"?"),t(),n(1877,"em"),e(1878,"R:"),t(),e(1879," Saca "),n(1880,"code"),e(1881,"null"),t(),e(1882," y "),n(1883,"code"),e(1884,"undefined"),t(),e(1885," del dominio de los dem\xE1s tipos: hay que declararlos ("),n(1886,"code"),e(1887,"T | null"),t(),e(1888,") y estrecharlos antes de usar el valor. Elimina la mayor fuente de errores de runtime en JS. "),t(),n(1889,"li")(1890,"strong"),e(1891,"\xBFQu\xE9 aporta "),n(1892,"code"),e(1893,"noUncheckedIndexedAccess"),t(),e(1894,"?"),t(),n(1895,"em"),e(1896,"R:"),t(),e(1897," El acceso por \xEDndice a arrays e index signatures pasa a tiparse "),n(1898,"code"),e(1899,"T | undefined"),t(),e(1900,", reflejando que la clave puede no existir. "),t(),n(1901,"li")(1902,"strong"),e(1903,"\xBF"),n(1904,"code"),e(1905,"@ts-ignore"),t(),e(1906," o "),n(1907,"code"),e(1908,"@ts-expect-error"),t(),e(1909,"?"),t(),n(1910,"em"),e(1911,"R:"),t(),n(1912,"code"),e(1913,"@ts-expect-error"),t(),e(1914,": si el error subyacente se arregla, la directiva pasa a ser un error, evitando supresiones zombis. "),t()(),n(1915,"div",2),e(1916," \u{1F4C2} "),n(1917,"code"),e(1918,"tsconfig.json"),t(),e(1919," \u2014 strict, noImplicitReturns, noImplicitOverride, strictTemplates "),t()(),n(1920,"div",17)(1921,"h3"),e(1922,"\u{1F537} 16. Decoradores (contexto Angular)"),t(),n(1923,"p"),e(1924," Un decorador es una funci\xF3n que anota una clase o sus miembros a\xF1adiendo metadata o comportamiento. Angular los usa como sistema de metadata: "),n(1925,"code"),e(1926,"@Component"),t(),e(1927,", "),n(1928,"code"),e(1929,"@Injectable"),t(),e(1930,", "),n(1931,"code"),e(1932,"@Pipe"),t(),e(1933,", "),n(1934,"code"),e(1935,"@Directive"),t(),e(1936,'... El compilador (AOT) lee esa metadata y genera el c\xF3digo de creaci\xF3n de vistas e inyecci\xF3n. Nota: los decoradores "experimentales" de TypeScript ('),n(1937,"code"),e(1938,"experimentalDecorators"),t(),e(1939,") no son id\xE9nticos a los decoradores est\xE1ndar de TC39 (TS 5.0+); Angular usa su propio procesamiento en compile-time. "),t(),n(1940,"pre"),r(),n(1941,"code"),r(),e(1942,`// Decorador de clase: recibe el constructor
function Logged<T extends new (...args: any[]) => object>(Base: T) {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);
      console.log(\\\`Instancia de \${Base.name} creada\\\`);
    }
  };
}

@Logged
class CartService { /* ... */ }

// En Angular: decoradores como metadata declarativa
@Component({
  selector: 'app-price-tag',
  template: \\\`<span>{{ price | currency }}</span>\\\`,
})
export class PriceTagComponent {
  @Input({ required: true }) price!: number;
  @Output() selected = new EventEmitter<void>();

  // Tendencia moderna: menos decoradores, m\xE1s funciones tipadas
  private readonly http = inject(HttpClient);      // vs constructor + @Inject
  quantity = input.required<number>();             // vs @Input
  changed = output<number>();                      // vs @Output
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly api = inject(ApiClient);
}`),a(),t(),a(),t(),n(1943,"h4"),e(1944,"\u2705 Mejores pr\xE1cticas"),t(),n(1945,"ul")(1946,"li")(1947,"strong"),e(1948,"En Angular moderno, prefiere las APIs funcionales:"),t(),n(1949,"code"),e(1950,"inject()"),t(),e(1951,", "),n(1952,"code"),e(1953,"input()"),t(),e(1954,", "),n(1955,"code"),e(1956,"output()"),t(),e(1957,", functional guards/interceptors. Tipan mejor (gen\xE9ricos reales) y reducen la dependencia de decoradores de miembro. "),t(),n(1958,"li")(1959,"strong"),e(1960,"Los decoradores de clase de Angular no se negocian:"),t(),n(1961,"code"),e(1962,"@Component"),t(),e(1963,", "),n(1964,"code"),e(1965,"@Injectable"),t(),e(1966," y compa\xF1\xEDa son el contrato con el compilador AOT; mantenlos con metadata est\xE1tica y analizable (sin expresiones din\xE1micas). "),t(),n(1967,"li")(1968,"strong"),e(1969,"No abuses de decoradores custom"),t(),e(1970," para l\xF3gica de negocio: son dif\xEDciles de tipar y de testear; una funci\xF3n expl\xEDcita suele ser m\xE1s clara. "),t()(),n(1971,"h4"),e(1972,"\u26A0\uFE0F Errores comunes"),t(),n(1973,"ul")(1974,"li")(1975,"strong"),e(1976,"Confundir decoradores experimentales con los est\xE1ndar:"),t(),e(1977," firma y capacidades difieren (los TC39 usan objetos "),n(1978,"code"),e(1979,"context"),t(),e(1980,"). C\xF3digo escrito para uno puede no funcionar con el otro flag. "),t(),n(1981,"li")(1982,"strong"),e(1983,"Olvidar "),n(1984,"code"),e(1985,"@Injectable"),t(),e(1986," en servicios con dependencias:"),t(),e(1987," sin decorador no se emite la metadata de DI y la inyecci\xF3n por constructor falla. Con "),n(1988,"code"),e(1989,"inject()"),t(),e(1990," el problema desaparece. "),t(),n(1991,"li")(1992,"strong"),e(1993,"L\xF3gica pesada dentro del decorador:"),t(),e(1994," se ejecuta al cargar el m\xF3dulo (import time), no al instanciar; puede penalizar el arranque y dificultar el testing. "),t()(),n(1995,"h4"),e(1996,"\u{1F3A4} Preguntas de entrevista"),t(),n(1997,"ul")(1998,"li")(1999,"strong"),e(2e3,"\xBFQu\xE9 es un decorador y c\xF3mo los usa Angular?"),t(),n(2001,"em"),e(2002,"R:"),t(),e(2003," Una funci\xF3n que anota clases/miembros. Angular los usa como metadata declarativa que el compilador AOT transforma en c\xF3digo de renderizado e inyecci\xF3n de dependencias. "),t(),n(2004,"li")(2005,"strong"),e(2006,"\xBFPor qu\xE9 Angular se mueve hacia "),n(2007,"code"),e(2008,"inject()"),t(),e(2009," e "),n(2010,"code"),e(2011,"input()"),t(),e(2012,"?"),t(),n(2013,"em"),e(2014,"R:"),t(),e(2015," Mejor inferencia de tipos, composici\xF3n en funciones reutilizables (fuera del constructor), menos dependencia de metadata de par\xE1metros y preparaci\xF3n para los decoradores est\xE1ndar. "),t(),n(2016,"li")(2017,"strong"),e(2018,"\xBFCu\xE1ndo se ejecuta un decorador?"),t(),n(2019,"em"),e(2020,"R:"),t(),e(2021," Una vez, cuando se eval\xFAa la declaraci\xF3n de la clase (al importar el m\xF3dulo), no en cada instanciaci\xF3n. "),t()(),n(2022,"div",2),e(2023," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(2024,"ul")(2025,"li")(2026,"code"),e(2027,"features/typescript-lab/ts-learn.ts"),t(),e(2028," \u2014 @Component con imports standalone"),t(),n(2029,"li")(2030,"code"),e(2031,"shared/directives/auto-glossary.directive.ts"),t(),e(2032," \u2014 @Directive con inject()"),t()()()()())},dependencies:[d],styles:["[_nghost-%COMP%]{display:block;padding:1rem 0}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.2rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .6rem;font-size:1.1rem}.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:1rem 0 .5rem;font-size:.95rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem}.card[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem;padding-left:1.2rem}.card[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.4rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:6px;padding:.8rem;overflow-x:auto;font-size:.85rem;line-height:1.5}code[_ngcontent-%COMP%]{color:var(--text)}"]})};export{s as TsLearnComponent};
