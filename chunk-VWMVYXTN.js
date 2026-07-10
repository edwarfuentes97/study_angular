import{a as p}from"./chunk-WXOJIICE.js";import"./chunk-BKIDS2JO.js";import{Db as n,Eb as t,Ta as a,Zb as e,ac as c,cc as l,dc as u,fb as s,fc as m,sa as i,ta as r}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var E=class d{static \u0275fac=function(o){return new(o||d)};static \u0275cmp=s({type:d,selectors:[["app-ngrx-learn"]],decls:1469,vars:30,consts:[["appAutoGlossary","",1,"learn-page"],[1,"page-title"],["id","que-es-ngrx",1,"card"],[1,"language-typescript"],[1,"qa"],[1,"code-ref"],["id","flujo-de-datos",1,"card"],[1,"flow-diagram"],[1,"flow-step"],[1,"flow-arrow"],["id","ciclo-de-vida-ngrx",1,"card"],["id","actions-en-profundidad",1,"card"],["id","reducers-e-inmutabilidad",1,"card"],["id","effects-patrones-de-concurrencia",1,"card"],[1,"compare-table"],["id","functional-effects-ngrx-moderno",1,"card"],["id","selectors-memoizacion-y-composicion",1,"card"],["id","patrones-avanzados-ngrx",1,"card"],["id","cuando-usar-ngrx-vs-servicios-simples",1,"card"],["id","64ngrx-entity-entityadapter",1,"card"],["id","standalone-integration-angular-20",1,"card"],["id","ngrx-store-devtools",1,"card"],["id","ngrx-store-vs-signalstore",1,"card"],["id","testing-ngrx",1,"card"]],template:function(o,S){o&1&&(n(0,"div",0)(1,"h2",1),e(2,"\u{1F4D6} NgRx \u2014 Teor\xEDa y Conceptos"),t(),n(3,"div",2)(4,"h3"),e(5,"\u{1F534} \xBFQu\xE9 es NgRx?"),t(),n(6,"p"),e(7," NgRx es la implementaci\xF3n del "),n(8,"strong"),e(9,"patr\xF3n Redux"),t(),e(10," para Angular. Proporciona un flujo unidireccional de datos predecible mediante cinco piezas clave: "),t(),n(11,"ul")(12,"li")(13,"strong"),e(14,"Store:"),t(),e(15," Fuente \xFAnica de verdad \u2014 un objeto inmutable que contiene todo el estado de la app."),t(),n(16,"li")(17,"strong"),e(18,"Actions:"),t(),e(19," Eventos que describen "),n(20,"em"),e(21,"qu\xE9 pas\xF3"),t(),e(22," (nunca c\xF3mo). Formato: "),n(23,"code"),e(24,"[Source] Event"),t(),e(25,"."),t(),n(26,"li")(27,"strong"),e(28,"Reducers:"),t(),e(29," Funciones puras que reciben el estado actual + una action y retornan un "),n(30,"strong"),e(31,"nuevo"),t(),e(32," estado."),t(),n(33,"li")(34,"strong"),e(35,"Selectors:"),t(),e(36," Funciones memoizadas que extraen y computan slices del Store."),t(),n(37,"li")(38,"strong"),e(39,"Effects:"),t(),e(40," Manejan side effects (HTTP, WebSocket, localStorage) fuera del reducer."),t()(),n(41,"pre")(42,"code",3),e(43),t()(),n(44,"h4"),e(45,"\u{1F3A4} Preguntas de entrevista"),t(),n(46,"dl",4)(47,"dt"),e(48,"P: \xBFQu\xE9 problema resuelve NgRx?"),t(),n(49,"dd"),e(50,'R: Gestionar estado compartido complejo de forma predecible: una \xFAnica fuente de verdad, cambios trazables mediante actions, y side effects aislados. Elimina el "\xBFqui\xE9n cambi\xF3 este dato y cu\xE1ndo?".'),t(),n(51,"dt"),e(52,"P: \xBFCu\xE1les son los tres principios de Redux que hereda NgRx?"),t(),n(53,"dd"),e(54,"R: 1) Single source of truth (un solo Store), 2) el estado es de solo lectura (solo cambia despachando actions), 3) los cambios se hacen con funciones puras (reducers)."),t(),n(55,"dt"),e(56,'P: \xBFQu\xE9 significa "flujo unidireccional de datos"?'),t(),n(57,"dd"),e(58,"R: Los datos siempre viajan en un solo sentido: Component \u2192 dispatch(Action) \u2192 Reducer \u2192 Store \u2192 Selector \u2192 Component. Nunca hay escrituras directas al estado desde la vista."),t()(),n(59,"div",5),e(60," \u{1F4C2} Implementaci\xF3n completa en el proyecto: "),n(61,"ul")(62,"li")(63,"code"),e(64,"features/ngrx-lab/store/product.actions.ts"),t(),e(65," \u2014 Actions: loadProducts, createProduct, updateProduct, deleteProduct"),t(),n(66,"li")(67,"code"),e(68,"features/ngrx-lab/store/product.reducer.ts"),t(),e(69," \u2014 Reducer con createReducer + EntityAdapter"),t(),n(70,"li")(71,"code"),e(72,"features/ngrx-lab/store/product.effects.ts"),t(),e(73," \u2014 Effects: switchMap, exhaustMap, mergeMap"),t(),n(74,"li")(75,"code"),e(76,"features/ngrx-lab/store/product.selectors.ts"),t(),e(77," \u2014 Selectors: selectAll, selectLoading, selectHighSustainability"),t(),n(78,"li")(79,"code"),e(80,"features/ngrx-lab/store/product.state.ts"),t(),e(81," \u2014 State: EntityState<Product> + loading, error"),t()()()(),n(82,"div",6)(83,"h3"),e(84,"\u{1F504} Flujo de Datos"),t(),n(85,"p"),e(86,"El ciclo completo de datos en NgRx sigue este camino:"),t(),n(87,"div",7)(88,"span",8),e(89,"Component"),t(),n(90,"span",9),e(91,"\u2192 dispatch(Action) \u2192"),t(),n(92,"span",8),e(93,"Reducer"),t(),n(94,"span",9),e(95,"\u2192"),t(),n(96,"span",8),e(97,"Store"),t(),n(98,"span",9),e(99,"\u2192 Selector \u2192"),t(),n(100,"span",8),e(101,"Component"),t()(),n(102,"p"),e(103,"Para operaciones as\xEDncronas, los "),n(104,"strong"),e(105,"Effects"),t(),e(106," interceptan la action, realizan el side effect y despachan una nueva action con el resultado:"),t(),n(107,"pre")(108,"code",3),e(109),t()(),n(110,"div",5),e(111," \u{1F4C2} "),n(112,"code"),e(113,"features/ngrx-lab/components/product-list.ts"),t(),e(114," \u2014 Smart Component que despacha actions y lee selectors "),t()(),n(115,"div",10)(116,"h3"),e(117,"\u{1F501} Ciclo de Vida Completo de NgRx"),t(),n(118,"h4"),e(119,"1. El ciclo completo paso a paso"),t(),n(120,"p")(121,"strong"),e(122,"Flujo s\xEDncrono (sin side effects):"),t()(),n(123,"pre"),r(),n(124,"code"),e(125,`Usuario hace click
  \u2192 Component.dispatch(action)
    \u2192 Store recibe action
      \u2192 Reducer procesa action \u2192 produce nuevo state
        \u2192 Store notifica selectors
          \u2192 Selectors re-calculan (si el input cambi\xF3)
            \u2192 Component recibe nuevo valor
              \u2192 View se actualiza`),t(),i(),t(),n(126,"p")(127,"strong"),e(128,"Flujo con side effects (HTTP, WebSocket, etc.):"),t()(),n(129,"pre"),r(),n(130,"code"),e(131,`Action despachada (ej: loadProducts)
  \u2192 Effect escucha con ofType(loadProducts)
    \u2192 Llama al API (HTTP / WebSocket / localStorage)
      \u2192 \xC9xito: Effect despacha loadProductsSuccess({ products })
      \u2192 Error: Effect despacha loadProductsFailure({ error })
        \u2192 Reducer procesa Success o Failure
          \u2192 Nuevo state (products cargados O error guardado)
            \u2192 Selectors recalculan \u2192 Component se actualiza`),t(),i(),t(),n(132,"h4"),e(133,"2. Actions en detalle"),t(),n(134,"p"),e(135," Las actions describen "),n(136,"strong"),e(137,"QU\xC9 pas\xF3"),t(),e(138,", nunca C\xD3MO reaccionar. Convenci\xF3n de naming: "),n(139,"code"),e(140,"[Source] Event"),t(),e(141,". "),t(),n(142,"pre"),r(),n(143,"code",3),e(144,`import { createAction, props, createActionGroup } from '@ngrx/store';

// Action simple (sin payload)
export const loadProducts = createAction('[Product Page] Load Products');

// Action con payload
export const addToCart = createAction(
  '[Cart] Add Item',
  props<{ product: Product }>()
);

// Action Groups (NgRx 15+) \u2014 agrupa actions relacionadas
export const ProductActions = createActionGroup({
  source: 'Product Page',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{ products: Product[] }>(),
    'Load Products Failure': props<{ error: string }>(),
    'Delete Product': props<{ id: string }>(),
    'Delete Product Success': props<{ id: string }>(),
  }
});

// Uso:
this.store.dispatch(ProductActions.loadProducts());
this.store.dispatch(ProductActions.deleteProduct({ id: '123' }));`),t(),i(),t(),n(145,"h4"),e(146,"3. Reducer en detalle"),t(),n(147,"p"),e(148," Funci\xF3n pura: "),n(149,"code"),e(150,"(state, action) => newState"),t(),e(151,". "),n(152,"strong"),e(153,"NUNCA"),t(),e(154," muta el state directamente \u2014 siempre usa spread operator para crear un nuevo objeto. "),t(),n(155,"pre"),r(),n(156,"code",3),e(157,`import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

// Estado inicial \u2014 siempre definir un default
export interface ProductState extends EntityState<Product> {
  loading: boolean;
  error: string | null;
}

const adapter = createEntityAdapter<Product>();
const initialState: ProductState = adapter.getInitialState({
  loading: false,
  error: null,
});

export const productReducer = createReducer(
  initialState,

  // Load \u2014 activar loading
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  // Success \u2014 guardar datos con EntityAdapter
  on(ProductActions.loadProductsSuccess, (state, { products }) =>
    adapter.setAll(products, { ...state, loading: false })
  ),

  // Failure \u2014 guardar error
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Delete con EntityAdapter
  on(ProductActions.deleteProductSuccess, (state, { id }) =>
    adapter.removeOne(id, state)
  ),
);

// Feature state registration (lazy-loaded)
// En las rutas del feature:
provideState('products', productReducer);`),t(),i(),t(),n(158,"h4"),e(159,"4. Effects en detalle"),t(),n(160,"p"),e(161," Effects manejan side effects fuera del reducer. Se crean con "),n(162,"code"),e(163,"createEffect()"),t(),e(164," y escuchan el stream de actions con "),n(165,"code"),e(166,"ofType()"),t(),e(167,". "),t(),n(168,"h5"),e(169,"Operadores cr\xEDticos en Effects:"),t(),n(170,"ul")(171,"li")(172,"strong"),e(173,"switchMap"),t(),e(174," \u2192 para LOAD (cancela petici\xF3n anterior si llega otra)"),t(),n(175,"li")(176,"strong"),e(177,"exhaustMap"),t(),e(178," \u2192 para CREATE/LOGIN (ignora clicks duplicados)"),t(),n(179,"li")(180,"strong"),e(181,"mergeMap"),t(),e(182," \u2192 para DELETE (varias en paralelo)"),t(),n(183,"li")(184,"strong"),e(185,"concatMap"),t(),e(186," \u2192 para UPDATE (mantiene el orden)"),t()(),n(187,"pre"),r(),n(188,"code",3),e(189,`import { createEffect, Actions, ofType } from '@ngrx/effects';

@Injectable()
export class ProductEffects {
  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  // LOAD \u2014 switchMap cancela peticiones anteriores
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        this.productService.getAll().pipe(
          map(products => ProductActions.loadProductsSuccess({ products })),
          catchError(err =>
            of(ProductActions.loadProductsFailure({ error: err.message }))
          )
        )
      )
    )
  );

  // CREATE \u2014 exhaustMap ignora clicks duplicados
  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.createProduct),
      exhaustMap(({ product }) =>
        this.productService.create(product).pipe(
          map(created => ProductActions.createProductSuccess({ product: created })),
          catchError(err =>
            of(ProductActions.createProductFailure({ error: err.message }))
          )
        )
      )
    )
  );

  // DELETE \u2014 mergeMap permite varias en paralelo
  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      mergeMap(({ id }) =>
        this.productService.delete(id).pipe(
          map(() => ProductActions.deleteProductSuccess({ id })),
          catchError(err =>
            of(ProductActions.deleteProductFailure({ error: err.message }))
          )
        )
      )
    )
  );
}`),t(),i(),t(),n(190,"h5"),e(191,"\u26A0\uFE0F Error handling \u2014 SIEMPRE catchError DENTRO del operador de aplanamiento:"),t(),n(192,"pre"),r(),n(193,"code",3),e(194,`// \u2705 CORRECTO \u2014 el effect sigue vivo despu\xE9s de un error
loadProducts$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ProductActions.loadProducts),
    switchMap(() =>
      this.productService.getAll().pipe(
        map(products => ProductActions.loadProductsSuccess({ products })),
        catchError(err => of(ProductActions.loadProductsFailure({ error: err.message })))
        // \u261D\uFE0F catchError DENTRO del switchMap \u2014 el observable interno falla,
        //    pero el observable externo (el effect) sigue escuchando actions
      )
    )
  )
);

// \u274C INCORRECTO \u2014 si falla, el effect MUERE y nunca m\xE1s procesa actions
loadProducts$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ProductActions.loadProducts),
    switchMap(() => this.productService.getAll()),
    map(products => ProductActions.loadProductsSuccess({ products })),
    catchError(err => of(ProductActions.loadProductsFailure({ error: err.message })))
    // \u261D\uFE0F catchError FUERA del switchMap \u2014 mata todo el effect stream
  )
);`),t(),i(),t(),n(195,"h5"),e(196,"Non-dispatching effects y lifecycle hooks:"),t(),n(197,"pre"),r(),n(198,"code",3),e(199,`// Non-dispatching effect \u2014 para logging, navigation, analytics
logActions$ = createEffect(() =>
  this.actions$.pipe(
    tap(action => console.log('[NgRx]', action.type))
  ),
  { dispatch: false }  // No despacha ninguna action
);

// Navegar despu\xE9s de crear exitosamente
navigateAfterCreate$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ProductActions.createProductSuccess),
    tap(({ product }) =>
      inject(Router).navigate(['/products', product.id])
    )
  ),
  { dispatch: false }
);

// Lifecycle hooks
export class ProductEffects implements OnInitEffects {
  // Se ejecuta una vez cuando los effects se registran
  ngrxOnInitEffects() {
    return ProductActions.loadProducts(); // Carga inicial autom\xE1tica
  }
}`),t(),i(),t(),n(200,"h4"),e(201,"5. Selectors en detalle"),t(),n(202,"p"),e(203," Los selectors son funciones "),n(204,"strong"),e(205,"memoizadas"),t(),e(206," que extraen y computan slices del Store. Solo recalculan si su input cambi\xF3 (igualdad por referencia). "),t(),n(207,"pre"),r(),n(208,"code",3),e(209,`import { createFeatureSelector, createSelector } from '@ngrx/store';

// 1. Feature selector \u2014 accede al slice del state global
const selectProductState = createFeatureSelector<ProductState>('products');

// 2. Selectors derivados \u2014 memoizados autom\xE1ticamente
const { selectAll, selectEntities, selectTotal } = adapter.getSelectors();

export const selectAllProducts = createSelector(
  selectProductState,
  selectAll   // retorna Product[]
);

export const selectLoading = createSelector(
  selectProductState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectProductState,
  (state) => state.error
);

// 3. Composici\xF3n de selectors \u2014 un selector usa otros selectors
export const selectExpensiveProducts = createSelector(
  selectAllProducts,
  (products) => products.filter(p => p.price > 100)
);

export const selectProductCount = createSelector(
  selectAllProducts,
  (products) => products.length
);

// 4. Selector con par\xE1metros (factory selector)
export const selectProductById = (id: string) =>
  createSelector(
    selectAllProducts,
    (products) => products.find(p => p.id === id)
  );

// 5. selectSignal (NgRx 18+) \u2014 retorna Signal en vez de Observable
// En el componente:
products = this.store.selectSignal(selectAllProducts);
// products() retorna Product[] \u2014 sin async pipe, s\xEDncrono`),t(),i(),t(),n(210,"h4"),e(211,"6. Store lifecycle en un componente"),t(),n(212,"pre"),r(),n(213,"code",3),e(214,`@Component({
  selector: 'app-product-list',
  template: \\\`
    @if (loading()) {
      <app-spinner />
    }

    @for (product of products(); track product.id) {
      <app-product-card
        [product]="product"
        (delete)="onDelete(product.id)" />
    }

    @if (error()) {
      <p class="error">{{ error() }}</p>
    }
  \\\`
})
export class ProductListComponent implements OnInit {
  private store = inject(Store);

  // \u2705 Approach moderno: Signals (NgRx 18+)
  products = this.store.selectSignal(selectAllProducts);
  loading = this.store.selectSignal(selectLoading);
  error = this.store.selectSignal(selectError);

  // Approach cl\xE1sico: Observables
  // products$ = this.store.select(selectAllProducts);

  ngOnInit() {
    // Despachar action para cargar datos
    this.store.dispatch(ProductActions.loadProducts());
  }

  onDelete(id: string) {
    this.store.dispatch(ProductActions.deleteProduct({ id }));
  }
}`),t(),i(),t(),n(215,"h4"),e(216,"7. DevTools y Debugging"),t(),n(217,"p"),e(218," NgRx DevTools permite inspeccionar el estado, ver cada action despachada, hacer time-travel, y exportar/importar sesiones completas para debugging. "),t(),n(219,"pre"),r(),n(220,"code",3),e(221,`// app.config.ts \u2014 configurar DevTools
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,              // Guarda las \xFAltimas 25 actions
      logOnly: !isDevMode(),   // Solo logging en producci\xF3n
    }),
  ]
};`),t(),i(),t(),n(222,"p")(223,"strong"),e(224,"Funcionalidades de Redux DevTools:"),t()(),n(225,"ul")(226,"li")(227,"strong"),e(228,"State inspection:"),t(),e(229," Ver todo el \xE1rbol de estado en cualquier momento"),t(),n(230,"li")(231,"strong"),e(232,"Action log:"),t(),e(233," Cada action despachada con timestamp y payload"),t(),n(234,"li")(235,"strong"),e(236,"Time travel:"),t(),e(237," Retroceder y avanzar entre estados para reproducir bugs"),t(),n(238,"li")(239,"strong"),e(240,"State diff:"),t(),e(241," Ver exactamente qu\xE9 cambi\xF3 entre cada action"),t(),n(242,"li")(243,"strong"),e(244,"Export/Import:"),t(),e(245," Guardar y reproducir sesiones completas de debugging"),t()(),n(246,"div",5),e(247," \u{1F4C2} Implementaci\xF3n completa en el proyecto: "),n(248,"ul")(249,"li")(250,"code"),e(251,"features/ngrx-lab/store/product.actions.ts"),t(),e(252," \u2014 Actions con createActionGroup"),t(),n(253,"li")(254,"code"),e(255,"features/ngrx-lab/store/product.reducer.ts"),t(),e(256," \u2014 Reducer con EntityAdapter"),t(),n(257,"li")(258,"code"),e(259,"features/ngrx-lab/store/product.effects.ts"),t(),e(260," \u2014 Effects con switchMap, exhaustMap, mergeMap"),t(),n(261,"li")(262,"code"),e(263,"features/ngrx-lab/store/product.selectors.ts"),t(),e(264," \u2014 Selectors memoizados"),t(),n(265,"li")(266,"code"),e(267,"features/ngrx-lab/components/product-list.ts"),t(),e(268," \u2014 Component con selectSignal y dispatch"),t()()()(),n(269,"div",11)(270,"h3"),e(271,"\u{1F3AC} Actions en Profundidad"),t(),n(272,"p"),e(273," Una action es un "),n(274,"strong"),e(275,"evento"),t(),e(276,", no un comando. Describe algo que "),n(277,"em"),e(278,"ya pas\xF3"),t(),e(279,' ("el usuario hizo click en guardar", "el API respondi\xF3 con error"), y son los reducers y effects quienes deciden c\xF3mo reaccionar. Esta distinci\xF3n \u2014 '),n(280,"strong"),e(281,"event-driven, no command-driven"),t(),e(282," \u2014 es la clave para que NgRx escale. "),t(),n(283,"h4"),e(284,"createAction + props"),t(),n(285,"pre"),r(),n(286,"code",3),e(287,`import { createAction, props } from '@ngrx/store';

// Sin payload \u2014 el tipo string DEBE ser \xFAnico en toda la app
export const loadProducts = createAction('[Products Page] Load Products');

// Con payload tipado \u2014 props<T>() define la forma del payload
export const createProduct = createAction(
  '[Products Page] Create Product',
  props<{ product: Omit<Product, 'id'> }>()
);

// Payload derivado \u2014 tercera forma: funci\xF3n creadora
export const searchProducts = createAction(
  '[Products Page] Search',
  (term: string) => ({ term: term.trim().toLowerCase() })
);`),t(),i(),t(),n(288,"h4"),e(289,"createActionGroup (NgRx 15+)"),t(),n(290,"p"),e(291," Agrupa actions relacionadas bajo un mismo "),n(292,"code"),e(293,"source"),t(),e(294," y genera los nombres de m\xE9todo autom\xE1ticamente (Title Case \u2192 camelCase). Reduce boilerplate dr\xE1sticamente: "),t(),n(295,"pre"),r(),n(296,"code",3),e(297,`import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ProductsApiActions = createActionGroup({
  source: 'Products API',
  events: {
    // 'Load Success' \u2192 ProductsApiActions.loadSuccess
    'Load Success': props<{ products: Product[] }>(),
    'Load Failure': props<{ error: string }>(),
    'Delete Success': props<{ id: string }>(),
    'Noop': emptyProps(),   // action sin payload dentro del grupo
  },
});

// Uso \u2014 tipos generados: '[Products API] Load Success'
this.store.dispatch(ProductsApiActions.loadSuccess({ products }));`),t(),i(),t(),n(298,"h4"),e(299,"Buenas pr\xE1cticas de naming"),t(),n(300,"ul")(301,"li")(302,"strong"),e(303,"[Source] Event:"),t(),e(304," el source dice D\xD3NDE se origin\xF3 ("),n(305,"code"),e(306,"[Products Page]"),t(),e(307,", "),n(308,"code"),e(309,"[Products API]"),t(),e(310,", "),n(311,"code"),e(312,"[Auth Guard]"),t(),e(313,")."),t(),n(314,"li"),e(315,"Actions de UI y de API separadas: la p\xE1gina despacha "),n(316,"code"),e(317,"Load Products"),t(),e(318,"; el effect despacha "),n(319,"code"),e(320,"Load Products Success/Failure"),t(),e(321,"."),t(),n(322,"li"),e(323,"Nombra el evento, no el efecto deseado: "),n(324,"code"),e(325,"[Login Page] Login Button Clicked"),t(),e(326," es mejor que "),n(327,"code"),e(328,"[Auth] Set User"),t(),e(329,"."),t(),n(330,"li"),e(331,"Varios reducers/effects pueden reaccionar a la MISMA action \u2014 eso es deseable (event-driven)."),t()(),n(332,"h4"),e(333,"\u26A0\uFE0F Errores comunes"),t(),n(334,"ul")(335,"li")(336,"strong"),e(337,"Actions gen\xE9ricas tipo setter"),t(),e(338," ("),n(339,"code"),e(340,"[App] Set Products"),t(),e(341,") reutilizadas desde 10 sitios: pierdes trazabilidad total en DevTools. Cada origen deber\xEDa tener su propia action."),t(),n(342,"li")(343,"strong"),e(344,"Tipos duplicados:"),t(),e(345," dos actions con el mismo string type \u2014 el reducer responde a ambas sin que lo notes. El type es la identidad de la action."),t(),n(346,"li")(347,"strong"),e(348,"Payloads no serializables"),t(),e(349," (instancias de clase, funciones, "),n(350,"code"),e(351,"Map"),t(),e(352,"): rompen DevTools, time-travel e hidrataci\xF3n."),t(),n(353,"li")(354,"strong"),e(355,'Despachar una action "para que el effect haga algo"'),t(),e(356," sin que describa un evento real \u2014 se\xF1al de que est\xE1s usando NgRx como un bus de comandos."),t()(),n(357,"h4"),e(358,"\u{1F3A4} Preguntas de entrevista"),t(),n(359,"dl",4)(360,"dt"),e(361,"P: \xBFPor qu\xE9 las actions deben ser eventos y no comandos?"),t(),n(362,"dd"),e(363,"R: Un evento describe qu\xE9 pas\xF3 y permite que m\xFAltiples consumidores (reducers, effects) reaccionen de forma independiente. Un comando acopla al emisor con un \xFAnico receptor y convierte el Store en un bus de RPC."),t(),n(364,"dt"),e(365,"P: \xBFQu\xE9 ventaja tiene createActionGroup sobre createAction?"),t(),n(366,"dd"),e(367,"R: Agrupa actions con el mismo source, genera autom\xE1ticamente los creators con nombres camelCase y elimina repetici\xF3n de strings. Menos boilerplate y menos typos."),t(),n(368,"dt"),e(369,"P: \xBFPueden dos reducers responder a la misma action?"),t(),n(370,"dd"),e(371,"R: S\xED, y es un patr\xF3n recomendado: por ejemplo, "),n(372,"code"),e(373,"[Auth] Logout"),t(),e(374," puede limpiar el slice de auth, el de carrito y el de perfil a la vez."),t()(),n(375,"div",5),e(376," \u{1F4C2} "),n(377,"code"),e(378,"features/ngrx-lab/store/product.actions.ts"),t(),e(379," \u2014 Actions con convenci\xF3n [Products Page] / [Products API] "),t()(),n(380,"div",12)(381,"h3"),e(382,"\u{1F9EE} Reducers e Inmutabilidad"),t(),n(383,"p"),e(384," Un reducer es una "),n(385,"strong"),e(386,"funci\xF3n pura"),t(),e(387,": "),n(388,"code"),e(389,"(state, action) => newState"),t(),e(390,". Puro significa: sin side effects, sin mutar argumentos, y el mismo input produce SIEMPRE el mismo output. NgRx (y el "),n(391,"code"),e(392,"OnPush"),t(),e(393," de Angular) dependen de la "),n(394,"strong"),e(395,"igualdad por referencia"),t(),e(396,": si el estado cambi\xF3, la referencia del objeto debe ser nueva. "),t(),n(397,"h4"),e(398,"createReducer + on"),t(),n(399,"pre"),r(),n(400,"code",3),e(401,`export const productReducer = createReducer(
  initialState,   // \u2190 obligatorio: el estado por defecto

  // Un on puede escuchar VARIAS actions con el mismo handler
  on(
    ProductActions.loadProducts,
    ProductActions.createProduct,
    ProductActions.deleteProduct,
    (state) => ({ ...state, loading: true, error: null })
  ),

  // Handler con payload destructurado
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);`),t(),i(),t(),n(402,"h4"),e(403,"Actualizaciones inmutables anidadas"),t(),n(404,"pre"),r(),n(405,"code",3),e(406,`// \u274C MUTACI\xD3N \u2014 misma referencia, nadie se entera del cambio
on(updateAddress, (state, { city }) => {
  state.user.address.city = city;   // \xA1NO! muta el state original
  return state;
});

// \u2705 INMUTABLE \u2014 copia cada nivel que cambia
on(updateAddress, (state, { city }) => ({
  ...state,
  user: {
    ...state.user,
    address: { ...state.user.address, city },
  },
}));

// \u2705 Arrays: nunca push/splice \u2014 crea uno nuevo
on(addTag, (state, { tag }) => ({
  ...state,
  tags: [...state.tags, tag],
}));
on(removeTag, (state, { tag }) => ({
  ...state,
  tags: state.tags.filter(t => t !== tag),
}));`),t(),i(),t(),n(407,"h4"),e(408,"Mejores pr\xE1cticas"),t(),n(409,"ul")(410,"li")(411,"strong"),e(412,'Reducers "tontos":'),t(),e(413," solo transforman datos. La l\xF3gica de negocio va en effects; la l\xF3gica de derivaci\xF3n, en selectors."),t(),n(414,"li")(415,"strong"),e(416,"No guardes datos derivados"),t(),e(417," (totales, filtrados): calc\xFAlalos en selectors. El Store guarda el estado m\xEDnimo."),t(),n(418,"li"),e(419,"Estado "),n(420,"strong"),e(421,"serializable"),t(),e(422,": primitivos, objetos planos y arrays. Nada de "),n(423,"code"),e(424,"Date"),t(),e(425," (usa ISO string), "),n(426,"code"),e(427,"Map"),t(),e(428,", "),n(429,"code"),e(430,"Set"),t(),e(431," ni instancias de clase."),t(),n(432,"li"),e(433,"En desarrollo activa "),n(434,"code"),e(435,"provideStore(reducers, { runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } })"),t(),e(436," para detectar mutaciones al instante."),t()(),n(437,"h4"),e(438,"\u26A0\uFE0F Errores comunes"),t(),n(439,"ul")(440,"li")(441,"strong"),e(442,"Mutar y devolver el mismo objeto:"),t(),e(443,' los selectors memoizados no recalculan y los componentes OnPush no se re-renderizan. El bug cl\xE1sico de "el dato cambi\xF3 pero la UI no".'),t(),n(444,"li")(445,"strong"),e(446,"Side effects en el reducer:"),t(),n(447,"code"),e(448,"Date.now()"),t(),e(449,", "),n(450,"code"),e(451,"Math.random()"),t(),e(452,", llamadas HTTP o "),n(453,"code"),e(454,"localStorage"),t(),e(455," rompen la pureza \u2014 el timestamp/id se genera en la action creator o en un effect."),t(),n(456,"li")(457,"strong"),e(458,"Spread superficial en objetos anidados:"),t(),n(459,"code"),e(460,"{ ...state }"),t(),e(461," copia solo el primer nivel; si mutas "),n(462,"code"),e(463,"state.user.address"),t(),e(464," sigues mutando el original."),t(),n(465,"li")(466,"strong"),e(467,"L\xF3gica condicional compleja por action type"),t(),e(468," dentro de un solo handler \u2014 divide en varios "),n(469,"code"),e(470,"on()"),t(),e(471,"."),t()(),n(472,"h4"),e(473,"\u{1F3A4} Preguntas de entrevista"),t(),n(474,"dl",4)(475,"dt"),e(476,"P: \xBFQu\xE9 pasa exactamente si mutas el state en un reducer?"),t(),n(477,"dd"),e(478,"R: La referencia no cambia, as\xED que los selectors memoizados devuelven el valor cacheado, OnPush no dispara change detection y el time-travel de DevTools muestra estados corruptos. Con strictStateImmutability activado, NgRx lanza un error."),t(),n(479,"dt"),e(480,"P: \xBFPor qu\xE9 los reducers deben ser funciones puras?"),t(),n(481,"dd"),e(482,"R: Garantizan predictibilidad (mismo input \u2192 mismo output), permiten testear sin mocks, y hacen posible el time-travel debugging: re-ejecutar la secuencia de actions reconstruye el estado exacto."),t(),n(483,"dt"),e(484,"P: \xBFD\xF3nde generar\xEDas un id o timestamp para una entidad nueva?"),t(),n(485,"dd"),e(486,"R: Nunca en el reducer. En la funci\xF3n creadora de la action, en un effect, o idealmente en el backend."),t()(),n(487,"div",5),e(488," \u{1F4C2} "),n(489,"code"),e(490,"features/ngrx-lab/store/product.reducer.ts"),t(),e(491," \u2014 createReducer con handlers inmutables + EntityAdapter "),t()(),n(492,"div",13)(493,"h3"),e(494,"\u{1F30A} Effects \u2014 Patrones de Concurrencia"),t(),n(495,"p"),e(496," El operador de aplanamiento ("),n(497,"em"),e(498,"flattening operator"),t(),e(499,") que elijas define qu\xE9 pasa cuando llegan "),n(500,"strong"),e(501,"varias actions del mismo tipo seguidas"),t(),e(502,". Elegir mal no es un detalle: puede cancelar un POST a mitad de camino o duplicar un pago. "),t(),n(503,"table",14)(504,"thead")(505,"tr")(506,"th"),e(507,"Operador"),t(),n(508,"th"),e(509,"Si llega otra action mientras la anterior est\xE1 en vuelo\u2026"),t(),n(510,"th"),e(511,"Caso de uso"),t()()(),n(512,"tbody")(513,"tr")(514,"td")(515,"strong"),e(516,"switchMap"),t()(),n(517,"td"),e(518,"Cancela la petici\xF3n anterior y arranca la nueva"),t(),n(519,"td"),e(520,"GET / b\xFAsqueda / autocomplete \u2014 solo importa el \xFAltimo resultado"),t()(),n(521,"tr")(522,"td")(523,"strong"),e(524,"concatMap"),t()(),n(525,"td"),e(526,"Encola: espera a que termine la anterior, ejecuta en orden"),t(),n(527,"td"),e(528,"UPDATE / escrituras donde el orden importa"),t()(),n(529,"tr")(530,"td")(531,"strong"),e(532,"mergeMap"),t()(),n(533,"td"),e(534,"Ejecuta todas en paralelo, sin orden garantizado"),t(),n(535,"td"),e(536,"DELETE de items independientes, operaciones sin dependencia"),t()(),n(537,"tr")(538,"td")(539,"strong"),e(540,"exhaustMap"),t()(),n(541,"td"),e(542,"IGNORA las nuevas hasta que termine la actual"),t(),n(543,"td"),e(544,"LOGIN / submit / refresh \u2014 anti doble-click"),t()()()(),n(545,"p")(546,"strong"),e(547,"Regla mnemot\xE9cnica:"),t(),e(548," lecturas \u2192 "),n(549,"code"),e(550,"switchMap"),t(),e(551,"; escrituras ordenadas \u2192 "),n(552,"code"),e(553,"concatMap"),t(),e(554,"; escrituras independientes \u2192 "),n(555,"code"),e(556,"mergeMap"),t(),e(557,"; acciones que no deben repetirse \u2192 "),n(558,"code"),e(559,"exhaustMap"),t(),e(560,". Si dudas con escrituras, "),n(561,"code"),e(562,"concatMap"),t(),e(563," es lo m\xE1s seguro. "),t(),n(564,"h4"),e(565,"Leer state dentro de un effect \u2014 concatLatestFrom"),t(),n(566,"pre"),r(),n(567,"code",3),e(568,`import { concatLatestFrom } from '@ngrx/operators';

// Evitar recargar si ya hay datos en el Store
loadIfEmpty$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ProductActions.loadProducts),
    concatLatestFrom(() => this.store.select(selectProductTotal)),
    filter(([, total]) => total === 0),   // solo si el store est\xE1 vac\xEDo
    switchMap(() =>
      this.api.getProducts().pipe(
        map((products) => ProductActions.loadProductsSuccess({ products })),
        catchError((err) => of(ProductActions.loadProductsFailure({ error: err.message })))
      )
    )
  )
);
// concatLatestFrom es lazy: solo eval\xFAa el selector cuando llega la action
// (withLatestFrom lo evaluar\xEDa siempre, aunque no haya actions)`),t(),i(),t(),n(569,"h4"),e(570,"Reintentos con backoff"),t(),n(571,"pre"),r(),n(572,"code",3),e(573,`switchMap(() =>
  this.api.getProducts().pipe(
    retry({ count: 3, delay: 1000 }),   // 3 reintentos, 1s entre cada uno
    map((products) => ProductActions.loadProductsSuccess({ products })),
    catchError((err) => of(ProductActions.loadProductsFailure({ error: err.message })))
  )
)`),t(),i(),t(),n(574,"h4"),e(575,"\u26A0\uFE0F Errores comunes"),t(),n(576,"ul")(577,"li")(578,"strong"),e(579,"catchError FUERA del operador de aplanamiento:"),t(),e(580," completa el stream del effect y NUNCA vuelve a procesar actions. Siempre dentro del pipe interno."),t(),n(581,"li")(582,"strong"),e(583,"switchMap en escrituras:"),t(),e(584," si el usuario dispara dos POST r\xE1pidos, el primero se cancela en el cliente\u2026 pero el servidor quiz\xE1 ya lo proces\xF3. Resultado: estado inconsistente."),t(),n(585,"li")(586,"strong"),e(587,"Loops infinitos:"),t(),e(588," un effect que despacha (directa o indirectamente) la misma action que escucha. DevTools lo delata: la misma action repetida sin parar."),t(),n(589,"li")(590,"strong"),e(591,"subscribe() manual dentro del effect:"),t(),e(592," rompe la cadena declarativa y pierde el manejo de errores/cancelaci\xF3n. El effect debe devolver un Observable de actions."),t(),n(593,"li")(594,"strong"),e(595,"Despachar la misma action Success desde varios effects"),t(),e(596," sin source distinto \u2014 imposible saber qui\xE9n la emiti\xF3."),t()(),n(597,"h4"),e(598,"\u{1F3A4} Preguntas de entrevista"),t(),n(599,"dl",4)(600,"dt"),e(601,"P: \xBFCu\xE1ndo usar\xEDas exhaustMap y por qu\xE9?"),t(),n(602,"dd"),e(603,"R: En login o cualquier submit: mientras la petici\xF3n est\xE1 en vuelo, los clicks repetidos se ignoran. Es la protecci\xF3n anti doble-submit m\xE1s limpia."),t(),n(604,"dt"),e(605,'P: \xBFPor qu\xE9 "muere" un effect y c\xF3mo lo evitas?'),t(),n(606,"dd"),e(607,"R: Si un error alcanza el stream externo del effect, RxJS lo completa y deja de escuchar actions para siempre. Se evita poniendo catchError dentro del observable interno (dentro del switchMap/mergeMap) y devolviendo una action de failure."),t(),n(608,"dt"),e(609,"P: \xBFC\xF3mo lees un valor del Store dentro de un effect?"),t(),n(610,"dd"),e(611,"R: Con concatLatestFrom(() => this.store.select(...)) de @ngrx/operators \u2014 es lazy y solo eval\xFAa el selector cuando llega la action."),t(),n(612,"dt"),e(613,"P: \xBFQu\xE9 es un non-dispatching effect?"),t(),n(614,"dd"),e(615,"R: Un effect con { dispatch: false } que ejecuta un side effect terminal (navegaci\xF3n, analytics, toast, logging) sin emitir una nueva action."),t()(),n(616,"div",5),e(617," \u{1F4C2} "),n(618,"code"),e(619,"features/ngrx-lab/store/product.effects.ts"),t(),e(620," \u2014 switchMap (load), exhaustMap (create), mergeMap (update/delete) "),t()(),n(621,"div",15)(622,"h3"),e(623,"\u26A1 Functional Effects (NgRx moderno)"),t(),n(624,"p"),e(625," Desde NgRx 15 los effects pueden ser "),n(626,"strong"),e(627,"funciones en vez de clases"),t(),e(628,". Las dependencias se obtienen con "),n(629,"code"),e(630,"inject()"),t(),e(631," como par\xE1metros por defecto, lo que los hace tree-shakeables y triviales de testear (puedes pasar mocks como argumentos). "),t(),n(632,"pre"),r(),n(633,"code",3),e(634,`// product.effects.ts \u2014 sin clase, sin @Injectable
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';

export const loadProducts = createEffect(
  (actions$ = inject(Actions), api = inject(MockApiService)) =>
    actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        api.getProducts().pipe(
          map((products) => ProductActions.loadProductsSuccess({ products })),
          catchError((err) =>
            of(ProductActions.loadProductsFailure({ error: err.message }))
          )
        )
      )
    ),
  { functional: true }   // \u2190 imprescindible
);

// Non-dispatching functional effect
export const logActions = createEffect(
  (actions$ = inject(Actions)) =>
    actions$.pipe(tap((a) => console.log('[NgRx]', a.type))),
  { functional: true, dispatch: false }
);

// Registro \u2014 se pasa un objeto con los effects (o import * as)
import * as productEffects from './store/product.effects';
provideEffects(productEffects);`),t(),i(),t(),n(635,"h4"),e(636,"Testing simplificado"),t(),n(637,"pre"),r(),n(638,"code",3),e(639,`// Los deps son par\xE1metros: p\xE1salos mockeados directamente
it('despacha success al cargar', () => {
  const actions$ = of(ProductActions.loadProducts());
  const api = { getProducts: () => of([mockProduct]) } as MockApiService;

  TestBed.runInInjectionContext(() => {
    loadProducts(actions$, api).subscribe((action) => {
      expect(action).toEqual(
        ProductActions.loadProductsSuccess({ products: [mockProduct] })
      );
    });
  });
});`),t(),i(),t(),n(640,"h4"),e(641,"\u26A0\uFE0F Errores comunes"),t(),n(642,"ul")(643,"li")(644,"strong"),e(645,"Olvidar "),n(646,"code"),e(647,"{ functional: true }"),t(),e(648,":"),t(),e(649," NgRx trata la funci\xF3n como effect de clase y falla en runtime al registrarlo."),t(),n(650,"li")(651,"strong"),e(652,"Llamar "),n(653,"code"),e(654,"inject()"),t(),e(655," fuera del par\xE1metro por defecto"),t(),e(656," (p. ej. dentro del pipe): solo funciona en contexto de inyecci\xF3n, es decir, al crearse el effect."),t(),n(657,"li")(658,"strong"),e(659,"Mezclar estilos sin criterio:"),t(),e(660," elige clase o funcional por feature; mezclar ambos en el mismo archivo confunde el registro con provideEffects."),t()(),n(661,"h4"),e(662,"\u{1F3A4} Preguntas de entrevista"),t(),n(663,"dl",4)(664,"dt"),e(665,"P: \xBFQu\xE9 ventajas tienen los functional effects sobre los de clase?"),t(),n(666,"dd"),e(667,"R: Menos boilerplate (sin clase ni @Injectable), tree-shaking real, y testing directo: las dependencias son par\xE1metros que puedes sustituir por mocks sin TestBed complejo."),t(),n(668,"dt"),e(669,"P: \xBFC\xF3mo se registran?"),t(),n(670,"dd"),e(671,"R: provideEffects(objetoConEffects) \u2014 t\xEDpicamente "),n(672,"code"),e(673,"import * as productEffects"),t(),e(674," y pasar el namespace completo."),t()(),n(675,"div",5),e(676," \u{1F4C2} "),n(677,"code"),e(678,"features/ngrx-lab/store/product.effects.ts"),t(),e(679," \u2014 versi\xF3n de clase equivalente (comp\xE1rala con la funcional de arriba) "),t()(),n(680,"div",16)(681,"h3"),e(682,"\u{1F3AF} Selectors \u2014 Memoizaci\xF3n y Composici\xF3n"),t(),n(683,"p")(684,"code"),e(685,"createSelector"),t(),e(686," memoiza con "),n(687,"strong"),e(688,"cach\xE9 de tama\xF1o 1"),t(),e(689,": guarda los \xFAltimos inputs y el \xFAltimo resultado. Si los inputs son "),n(690,"em"),e(691,"los mismos por referencia"),t(),e(692,", devuelve el resultado cacheado sin ejecutar la funci\xF3n proyectora. Por eso la inmutabilidad del reducer es cr\xEDtica: referencia nueva = rec\xE1lculo; misma referencia = cach\xE9. "),t(),n(693,"pre"),r(),n(694,"code",3),e(695,`// Composici\xF3n: cada selector construye sobre otros
export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(selectProductState, selectAll);
export const selectLoading = createSelector(selectProductState, (s) => s.loading);

// Derivar, no almacenar: el filtrado vive AQU\xCD, no en el Store
export const selectHighSustainability = createSelector(
  selectAllProducts,
  (products) => products.filter((p) => p.sustainabilityScore >= 80)
);

// View model selector: un solo selector para toda la vista
// \u2192 el componente hace UN select en vez de cinco
export const selectProductListVm = createSelector(
  selectAllProducts,
  selectLoading,
  selectError,
  (products, loading, error) => ({ products, loading, error })
);`),t(),i(),t(),n(696,"h4"),e(697,"Selectores parametrizados"),t(),n(698,"pre"),r(),n(699,"code",3),e(700,`// Factory selector \u2014 crea una instancia memoizada POR LLAMADA
export const selectProductById = (id: string) =>
  createSelector(selectProductEntities, (entities) => entities[id] ?? null);

// \u26A0\uFE0F Cada llamada a selectProductById('1') crea un selector NUEVO
// (memoizaci\xF3n desde cero). Crea la instancia UNA vez por componente:
export class ProductDetailComponent {
  private store = inject(Store);
  private route = inject(ActivatedRoute);

  // \u2705 el selector se crea UNA sola vez y se reutiliza
  private readonly byId = selectProductById(this.route.snapshot.params['id']);
  product = this.store.selectSignal(this.byId);
}

// Alternativa sin factory: seleccionar el mapa de entities
// e indexar con un computed \u2014 memoizaci\xF3n intacta, cero instancias extra
export class ProductDetailComponent {
  private store = inject(Store);
  id = input.required<string>();

  private entities = this.store.selectSignal(selectProductEntities);
  product = computed(() => this.entities()[this.id()] ?? null);
}`),t(),i(),t(),n(701,"h4"),e(702,"Testing con projector"),t(),n(703,"pre"),r(),n(704,"code",3),e(705,`// .projector() ejecuta SOLO la funci\xF3n proyectora, sin Store ni memoizaci\xF3n
it('filtra productos sostenibles', () => {
  const products = [
    { id: '1', sustainabilityScore: 90 },
    { id: '2', sustainabilityScore: 40 },
  ] as Product[];

  const result = selectHighSustainability.projector(products);
  expect(result.length).toBe(1);
});`),t(),i(),t(),n(706,"h4"),e(707,"\u26A0\uFE0F Errores comunes"),t(),n(708,"ul")(709,"li")(710,"strong"),e(711,"Llamar el factory selector en el template o en cada select:"),t(),e(712," cada llamada crea un selector nuevo sin cach\xE9 \u2014 rec\xE1lculo en cada change detection."),t(),n(713,"li")(714,"strong"),e(715,"Filtrar/mapear en el componente"),t(),e(716," en vez de en un selector: pierdes memoizaci\xF3n y duplicas l\xF3gica entre componentes."),t(),n(717,"li")(718,"strong"),e(719,"Selectores que devuelven objetos literales nuevos por dise\xF1o:"),t(),e(720," est\xE1 bien en view models, pero recuerda que emiten referencia nueva en cada rec\xE1lculo \u2014 no los uses como input de otros selectors con l\xF3gica pesada sin necesidad."),t(),n(721,"li")(722,"strong"),e(723,"Feature selector con string equivocado:"),t(),n(724,"code"),e(725,"createFeatureSelector('product')"),t(),e(726," vs "),n(727,"code"),e(728,"'products'"),t(),e(729," devuelve undefined silenciosamente. Usa createFeature para tipar el nombre."),t()(),n(730,"h4"),e(731,"\u{1F3A4} Preguntas de entrevista"),t(),n(732,"dl",4)(733,"dt"),e(734,"P: \xBFC\xF3mo funciona la memoizaci\xF3n de createSelector?"),t(),n(735,"dd"),e(736,"R: Guarda los \xFAltimos argumentos y el \xFAltimo resultado (cach\xE9 de 1). Compara los nuevos inputs por referencia (===): si son iguales, devuelve el cacheado; si no, ejecuta el projector y actualiza la cach\xE9."),t(),n(737,"dt"),e(738,"P: \xBFPor qu\xE9 la memoizaci\xF3n depende de la inmutabilidad?"),t(),n(739,"dd"),e(740,"R: Porque compara por referencia. Si el reducer muta, la referencia no cambia y el selector devuelve el valor viejo cacheado aunque los datos hayan cambiado."),t(),n(741,"dt"),e(742,"P: \xBFC\xF3mo testeas un selector sin montar el Store?"),t(),n(743,"dd"),e(744,"R: Con selector.projector(...inputs): ejecuta solo la funci\xF3n de proyecci\xF3n con datos fake \u2014 test de funci\xF3n pura."),t(),n(745,"dt"),e(746,"P: \xBFCu\xE1l es el riesgo de los selectores parametrizados (factory)?"),t(),n(747,"dd"),e(748,"R: Cada invocaci\xF3n de la factory crea una instancia con su propia cach\xE9 vac\xEDa. Hay que crearla una vez por componente/par\xE1metro, o usar el mapa de entities e indexar."),t()(),n(749,"div",5),e(750," \u{1F4C2} "),n(751,"code"),e(752,"features/ngrx-lab/store/product.selectors.ts"),t(),e(753," \u2014 composici\xF3n: selectSelectedProduct combina selectSelectedId + selectProductEntities "),t()(),n(754,"div",17)(755,"h3"),e(756,"\u{1F9E9} Patrones Avanzados de NgRx"),t(),n(757,"h4"),e(758,"1. Facade Pattern"),t(),n(759,"p"),e(760,' Un servicio "facade" encapsula el Store \u2014 los componentes '),n(761,"strong"),e(762,"nunca inyectan Store directamente"),t(),e(763,". Esto desacopla los componentes de NgRx, facilita testing, y centraliza la l\xF3gica de dispatch/select. "),t(),n(764,"pre"),r(),n(765,"code",3),e(766,`// product.facade.ts \u2014 encapsula TODO el acceso al Store
@Injectable({ providedIn: 'root' })
export class ProductFacade {
  private store = inject(Store);

  // Selectors expuestos como Signals
  readonly products = this.store.selectSignal(selectAllProducts);
  readonly loading = this.store.selectSignal(selectLoading);
  readonly error = this.store.selectSignal(selectError);
  readonly selectedProduct = this.store.selectSignal(selectSelectedProduct);

  // Actions encapsuladas como m\xE9todos
  loadProducts() {
    this.store.dispatch(ProductActions.loadProducts());
  }

  createProduct(product: CreateProductDto) {
    this.store.dispatch(ProductActions.createProduct({ product }));
  }

  deleteProduct(id: string) {
    this.store.dispatch(ProductActions.deleteProduct({ id }));
  }

  selectProduct(id: string) {
    this.store.dispatch(ProductActions.selectProduct({ id }));
  }
}

// En el componente \u2014 limpio y desacoplado de NgRx
@Component({ ... })
export class ProductListComponent {
  private facade = inject(ProductFacade);
  products = this.facade.products;
  loading = this.facade.loading;

  ngOnInit() { this.facade.loadProducts(); }
  onDelete(id: string) { this.facade.deleteProduct(id); }
}`),t(),i(),t(),n(767,"h4"),e(768,"2. Optimistic Updates"),t(),n(769,"p"),e(770," Actualizar la UI "),n(771,"strong"),e(772,"inmediatamente"),t(),e(773," antes de que el API responda, y revertir si falla. Mejora la UX percibida. "),t(),n(774,"pre"),r(),n(775,"code",3),e(776,`// Reducer \u2014 actualiza INMEDIATAMENTE al despachar deleteProduct
on(ProductActions.deleteProduct, (state, { id }) =>
  adapter.removeOne(id, state)   // \u2190 optimista: borra antes de confirmar
),

// Si falla, re-agregar el producto
on(ProductActions.deleteProductFailure, (state, { product }) =>
  adapter.addOne(product, state) // \u2190 revertir: lo vuelve a agregar
),

// Effect \u2014 intenta borrar en el API
deleteProduct$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ProductActions.deleteProduct),
    mergeMap(({ id }) =>
      this.productService.delete(id).pipe(
        map(() => ProductActions.deleteProductSuccess({ id })),
        catchError(() => {
          // Necesitamos el producto original para revertir
          const product = this.store.selectSignal(selectProductById(id))();
          return of(ProductActions.deleteProductFailure({ product }));
        })
      )
    )
  )
);`),t(),i(),t(),n(777,"h4"),e(778,"3. Entity Pattern \u2014 Normalizaci\xF3n"),t(),n(779,"p")(780,"strong"),e(781,"\xBFPor qu\xE9 no usar arrays?"),t(),e(782," Buscar un item en un array es O(n). Con "),n(783,"code"),e(784,"EntityAdapter"),t(),e(785,", los datos se guardan como "),n(786,"code"),e(787,"{ ids: string[], entities: { [id]: Entity } }"),t(),e(788,", haciendo lookups O(1). Elimina duplicados y simplifica updates. "),t(),n(789,"pre"),r(),n(790,"code",3),e(791,`// \u274C Con array \u2014 lento, propenso a duplicados
interface State {
  products: Product[];  // Buscar: products.find(p => p.id === id) \u2192 O(n)
}

// \u2705 Con EntityAdapter \u2014 normalizado, O(1) lookups
interface State extends EntityState<Product> {
  // EntityState provee: ids: string[], entities: { [id: string]: Product }
  loading: boolean;
}

const adapter = createEntityAdapter<Product>();

// Operaciones CRUD limpias:
adapter.addOne(product, state);              // Agregar uno
adapter.addMany(products, state);            // Agregar varios
adapter.setAll(products, state);             // Reemplazar todos
adapter.updateOne({ id, changes }, state);  // Actualizar parcial
adapter.removeOne(id, state);                // Eliminar uno
adapter.upsertOne(product, state);           // Agregar o actualizar

// Selectors generados autom\xE1ticamente:
const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();`),t(),i(),t(),n(792,"h4"),e(793,"4. Router Store"),t(),n(794,"p")(795,"code"),e(796,"@ngrx/router-store"),t(),e(797," sincroniza el estado de la ruta de Angular con el NgRx Store. Permite crear selectors basados en par\xE1metros de la URL. "),t(),n(798,"pre"),r(),n(799,"code",3),e(800,`// app.config.ts \u2014 registrar Router Store
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ router: routerReducer }),
    provideRouterStore(),
  ]
};

// Selectors basados en la ruta
import { getRouterSelectors } from '@ngrx/router-store';

const { selectRouteParams, selectQueryParams, selectUrl } =
  getRouterSelectors();

// Selector que combina ruta + state
export const selectCurrentProduct = createSelector(
  selectRouteParams,
  selectEntities,
  (params, entities) => entities[params['id']]
);

// En el componente:
currentProduct = this.store.selectSignal(selectCurrentProduct);
// Se actualiza autom\xE1ticamente al navegar a /products/:id`),t(),i(),t(),n(801,"h4"),e(802,"5. Meta-reducers"),t(),n(803,"p"),e(804," Meta-reducers son "),n(805,"strong"),e(806,"middleware"),t(),e(807," que interceptan TODAS las actions antes de que lleguen a los reducers. \xDAtiles para logging, freeze de state en dev, y limpiar state al hacer logout. "),t(),n(808,"pre"),r(),n(809,"code",3),e(810,`import { MetaReducer, ActionReducer } from '@ngrx/store';

// Meta-reducer para logging
function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.group(action.type);
    console.log('State antes:', state);
    const nextState = reducer(state, action);
    console.log('State despu\xE9s:', nextState);
    console.groupEnd();
    return nextState;
  };
}

// Meta-reducer para freeze \u2014 previene mutaciones accidentales en dev
function freeze(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const nextState = reducer(state, action);
    Object.freeze(nextState); // Lanza error si alguien intenta mutar
    return nextState;
  };
}

// Meta-reducer para limpiar state al hacer logout
function clearState(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === '[Auth] Logout') {
      return reducer(undefined, action); // Reset a initialState
    }
    return reducer(state, action);
  };
}

// Registrar meta-reducers
const metaReducers: MetaReducer[] = isDevMode()
  ? [logger, freeze]
  : [clearState];

// En app.config.ts:
provideStore({ router: routerReducer }, { metaReducers });`),t(),i(),t(),n(811,"h4"),e(812,"\u26A0\uFE0F Errores comunes"),t(),n(813,"ul")(814,"li")(815,"strong"),e(816,"Facade como god-object:"),t(),e(817," si el facade acumula m\xE9todos de 4 features distintas, se convierte en el nuevo acoplamiento. Un facade por feature, con API m\xEDnima."),t(),n(818,"li")(819,"strong"),e(820,"Facade que oculta el modelo de eventos:"),t(),e(821," m\xE9todos tipo "),n(822,"code"),e(823,"facade.setProducts(list)"),t(),e(824," convierten NgRx en un setter glorificado. Los m\xE9todos deben mapear 1:1 a eventos de dominio."),t(),n(825,"li")(826,"strong"),e(827,"Optimistic update sin rollback:"),t(),e(828," si borras de la UI antes de confirmar, la action de failure DEBE restaurar el item (y avisar al usuario). Sin plan de reversi\xF3n, no hagas optimistic."),t(),n(829,"li")(830,"strong"),e(831,"L\xF3gica de dominio en meta-reducers:"),t(),e(832," son infraestructura transversal (logging, reset, hydration). Si un meta-reducer conoce tus entidades de negocio, ese c\xF3digo pertenece a un reducer."),t()(),n(833,"h4"),e(834,"\u{1F3A4} Preguntas de entrevista"),t(),n(835,"dl",4)(836,"dt"),e(837,"P: \xBFVentajas y desventajas del Facade Pattern con NgRx?"),t(),n(838,"dd"),e(839,"R: Ventajas: componentes desacoplados de NgRx, testing sencillo (mockeas el facade), API de dominio clara. Desventajas: capa extra de indirecci\xF3n y riesgo de esconder el modelo de eventos detr\xE1s de m\xE9todos imperativos."),t(),n(840,"dt"),e(841,"P: \xBFCu\xE1ndo aplicar\xEDas optimistic updates?"),t(),n(842,"dd"),e(843,"R: En operaciones con alta probabilidad de \xE9xito y bajo costo de reversi\xF3n (likes, toggles, deletes recuperables). Nunca en pagos u operaciones cr\xEDticas donde mostrar un estado falso es inaceptable."),t(),n(844,"dt"),e(845,"P: \xBFQu\xE9 es un meta-reducer y un caso de uso real?"),t(),n(846,"dd"),e(847,"R: Una funci\xF3n de orden superior que envuelve a los reducers (middleware). Caso t\xEDpico: al despachar [Auth] Logout, delegar con state = undefined para resetear TODO el store al estado inicial."),t(),n(848,"dt"),e(849,"P: \xBFPara qu\xE9 sirve @ngrx/router-store?"),t(),n(850,"dd"),e(851,"R: Sincroniza la ruta con el Store para que la URL sea parte del estado: puedes crear selectors que combinan route params con entities (p. ej. el detalle actual) sin inyectar ActivatedRoute."),t()(),n(852,"div",5),e(853," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(854,"ul")(855,"li")(856,"code"),e(857,"features/ngrx-lab/store/product.effects.ts"),t(),e(858," \u2014 Effects con operadores switchMap, exhaustMap, mergeMap"),t(),n(859,"li")(860,"code"),e(861,"features/ngrx-lab/store/product.selectors.ts"),t(),e(862," \u2014 Selectors compuestos y factory selectors"),t(),n(863,"li")(864,"code"),e(865,"features/ngrx-lab/store/product.reducer.ts"),t(),e(866," \u2014 EntityAdapter con operaciones CRUD"),t(),n(867,"li")(868,"code"),e(869,"app.config.ts"),t(),e(870," \u2014 provideStore() + provideStoreDevtools()"),t()()()(),n(871,"div",18)(872,"h3"),e(873,"\u2696\uFE0F \xBFCu\xE1ndo usar NgRx vs Servicios simples?"),t(),n(874,"table",14)(875,"thead")(876,"tr")(877,"th"),e(878,"Criterio"),t(),n(879,"th"),e(880,"Servicio con BehaviorSubject"),t(),n(881,"th"),e(882,"NgRx Store"),t()()(),n(883,"tbody")(884,"tr")(885,"td"),e(886,"Complejidad del estado"),t(),n(887,"td"),e(888,"Bajo \u2014 pocos datos compartidos"),t(),n(889,"td"),e(890,"Alto \u2014 muchos componentes leen/escriben"),t()(),n(891,"tr")(892,"td"),e(893,"Debugging"),t(),n(894,"td"),e(895,"console.log manual"),t(),n(896,"td"),e(897,"Redux DevTools, time-travel"),t()(),n(898,"tr")(899,"td"),e(900,"Boilerplate"),t(),n(901,"td"),e(902,"M\xEDnimo"),t(),n(903,"td"),e(904,"Actions + Reducer + Selectors + Effects"),t()(),n(905,"tr")(906,"td"),e(907,"Testabilidad"),t(),n(908,"td"),e(909,"Buena"),t(),n(910,"td"),e(911,"Excelente \u2014 cada pieza es una funci\xF3n pura"),t()(),n(912,"tr")(913,"td"),e(914,"Equipo grande"),t(),n(915,"td"),e(916,"Dif\xEDcil mantener consistencia"),t(),n(917,"td"),e(918,"Patr\xF3n \xFAnico, convenciones claras"),t()(),n(919,"tr")(920,"td"),e(921,"Side effects"),t(),n(922,"td"),e(923,"Dentro del servicio"),t(),n(924,"td"),e(925,"Aislados en Effects"),t()()()(),n(926,"p")(927,"strong"),e(928,"Regla pr\xE1ctica:"),t(),e(929," Si tu app tiene m\xE1s de 3 features que comparten estado, NgRx vale la pena."),t(),n(930,"div",5),e(931," \u{1F4C2} "),n(932,"code"),e(933,"core/services/progress.service.ts"),t(),e(934," \u2014 Ejemplo de servicio con Signals (alternativa simple a NgRx) "),t()(),n(935,"div",19)(936,"h3"),e(937,"\u{1F4E6} @ngrx/entity \u2014 EntityAdapter"),t(),n(938,"p")(939,"code"),e(940,"EntityAdapter"),t(),e(941," normaliza colecciones en un formato "),n(942,"code"),e(943),t(),e(944,", eliminando arrays anidados y haciendo lookups O(1) por ID. "),t(),n(945,"pre")(946,"code",3),e(947),t()(),n(948,"p")(949,"strong"),e(950,"\xBFPor qu\xE9 normalizar?"),t(),e(951," Evita duplicados, simplifica updates, y los selectors son m\xE1s eficientes."),t(),n(952,"h4"),e(953,"selectId y sortComparer"),t(),n(954,"p"),e(955," El adapter acepta dos opciones de configuraci\xF3n: "),n(956,"code"),e(957,"selectId"),t(),e(958," (c\xF3mo extraer la clave \u2014 por defecto busca la propiedad "),n(959,"code"),e(960,"id"),t(),e(961,") y "),n(962,"code"),e(963,"sortComparer"),t(),e(964," (mantiene "),n(965,"code"),e(966,"ids"),t(),e(967," ordenado en cada inserci\xF3n; sin \xE9l, el orden es el de llegada). "),t(),n(968,"pre"),r(),n(969,"code",3),e(970,`// As\xED est\xE1 configurado en este proyecto:
export const productAdapter = createEntityAdapter<Product>({
  selectId: (p) => p.id,                                // clave primaria
  sortComparer: (a, b) => a.name.localeCompare(b.name), // orden alfab\xE9tico
});

// Si tu entidad usa otra clave (sku, uuid, code)... selectId es OBLIGATORIO:
const adapter = createEntityAdapter<Sku>({ selectId: (s) => s.sku });`),t(),i(),t(),n(971,"h4"),e(972,"M\xE9todos CRUD del adapter"),t(),n(973,"table",14)(974,"thead")(975,"tr")(976,"th"),e(977,"M\xE9todo"),t(),n(978,"th"),e(979,"Qu\xE9 hace"),t()()(),n(980,"tbody")(981,"tr")(982,"td")(983,"code"),e(984,"addOne / addMany"),t()(),n(985,"td"),e(986,"Agrega si NO existe (si el id ya est\xE1, no hace nada)"),t()(),n(987,"tr")(988,"td")(989,"code"),e(990,"setOne / setMany"),t()(),n(991,"td"),e(992,"Agrega o REEMPLAZA completo por id"),t()(),n(993,"tr")(994,"td")(995,"code"),e(996,"setAll"),t()(),n(997,"td"),e(998,"Reemplaza TODA la colecci\xF3n (t\xEDpico en Load Success)"),t()(),n(999,"tr")(1e3,"td")(1001,"code"),e(1002,"updateOne / updateMany"),t()(),n(1003,"td"),e(1004,"Actualizaci\xF3n PARCIAL: recibe "),n(1005,"code"),e(1006,"{ id, changes }"),t(),e(1007," (tipo "),n(1008,"code"),e(1009,"Update<T>"),t(),e(1010,")"),t()(),n(1011,"tr")(1012,"td")(1013,"code"),e(1014,"upsertOne / upsertMany"),t()(),n(1015,"td"),e(1016,"Inserta si no existe, mergea si existe"),t()(),n(1017,"tr")(1018,"td")(1019,"code"),e(1020,"removeOne / removeMany / removeAll"),t()(),n(1021,"td"),e(1022,"Elimina por id(s) / vac\xEDa la colecci\xF3n"),t()(),n(1023,"tr")(1024,"td")(1025,"code"),e(1026,"mapOne / map"),t()(),n(1027,"td"),e(1028,"Transforma una / todas las entidades con una funci\xF3n"),t()()()(),n(1029,"h4"),e(1030,"Selectors generados \u2014 getSelectors()"),t(),n(1031,"pre"),r(),n(1032,"code",3),e(1033,`// El adapter genera 4 selectors contra EntityState<Product>:
export const { selectAll, selectEntities, selectIds, selectTotal } =
  productAdapter.getSelectors();

// Se componen con el feature selector:
export const selectAllProducts = createSelector(selectProductState, selectAll);
export const selectProductTotal = createSelector(selectProductState, selectTotal);

// selectEntities (el diccionario) es la base para lookups O(1):
export const selectSelectedProduct = createSelector(
  selectSelectedId,
  selectProductEntities,
  (id, entities) => (id ? entities[id] ?? null : null)
);`),t(),i(),t(),n(1034,"h4"),e(1035,"\u26A0\uFE0F Errores comunes"),t(),n(1036,"ul")(1037,"li")(1038,"strong"),e(1039,"Confundir addOne con setOne/upsertOne:"),t(),n(1040,"code"),e(1041,"addOne"),t(),e(1042,' ignora silenciosamente si el id ya existe \u2014 el cl\xE1sico "actualic\xE9 pero no se refleja".'),t(),n(1043,"li")(1044,"strong"),e(1045,"Pasar la entidad completa a updateOne:"),t(),e(1046," espera "),n(1047,"code"),e(1048,"{ id, changes }"),t(),e(1049,", no el objeto plano. "),n(1050,"code"),e(1051,"updateOne(product, state)"),t(),e(1052," compila raro y falla en runtime."),t(),n(1053,"li")(1054,"strong"),e(1055,"Olvidar selectId"),t(),e(1056," cuando la clave no se llama "),n(1057,"code"),e(1058,"id"),t(),e(1059,": el adapter guarda entidades bajo "),n(1060,"code"),e(1061,"undefined"),t(),e(1062,"."),t(),n(1063,"li")(1064,"strong"),e(1065,"sortComparer en colecciones enormes con inserciones frecuentes:"),t(),e(1066," reordena en cada operaci\xF3n de escritura. Si el orden solo importa en una vista, ordena en un selector."),t(),n(1067,"li")(1068,"strong"),e(1069,"Iterar "),n(1070,"code"),e(1071,"entities"),t(),e(1072," con Object.values() en cada componente:"),t(),e(1073," para listas usa "),n(1074,"code"),e(1075,"selectAll"),t(),e(1076,", que ya est\xE1 memoizado."),t()(),n(1077,"h4"),e(1078,"\u{1F3A4} Preguntas de entrevista"),t(),n(1079,"dl",4)(1080,"dt"),e(1081,"P: \xBFQu\xE9 estructura interna crea EntityAdapter y por qu\xE9?"),t(),n(1082,"dd"),e(1083,"R: { ids: string[], entities: { [id]: T } } \u2014 el array preserva el orden y el diccionario da lookup O(1). Es la forma normalizada est\xE1ndar de Redux."),t(),n(1084,"dt"),e(1085,"P: \xBFDiferencia entre addOne, setOne y upsertOne?"),t(),n(1086,"dd"),e(1087,"R: addOne solo inserta si no existe; setOne inserta o reemplaza el objeto completo; upsertOne inserta o hace merge parcial con el existente."),t(),n(1088,"dt"),e(1089,"P: \xBFQu\xE9 recibe updateOne?"),t(),n(1090,"dd"),e(1091,"R: Un Update<T>: { id, changes } donde changes es un Partial<T> \u2014 permite actualizar solo los campos que cambiaron."),t(),n(1092,"dt"),e(1093,"P: \xBFPara qu\xE9 sirve sortComparer?"),t(),n(1094,"dd"),e(1095,"R: Mantiene el array ids ordenado en cada mutaci\xF3n, de modo que selectAll siempre devuelve la colecci\xF3n ordenada sin trabajo extra en los selectors."),t()(),n(1096,"div",5),e(1097," \u{1F4C2} "),n(1098,"code"),e(1099,"features/ngrx-lab/store/product.reducer.ts"),t(),e(1100," \u2014 EntityAdapter con selectId, sortComparer, addOne, setAll, updateOne, removeOne "),t()(),n(1101,"div",20)(1102,"h3"),e(1103,"\u26A1 Standalone Integration (Angular 20+)"),t(),n(1104,"p"),e(1105," En Angular moderno no necesitas "),n(1106,"code"),e(1107,"StoreModule.forRoot()"),t(),e(1108,". Usa las funciones "),n(1109,"code"),e(1110,"provide*"),t(),e(1111," directamente: "),t(),n(1112,"pre")(1113,"code",3),e(1114),t()(),n(1115,"p"),e(1116,"Cada feature registra su estado de forma lazy \u2014 solo se carga cuando el usuario navega ah\xED."),t(),n(1117,"h4"),e(1118,"createFeature \u2014 menos strings m\xE1gicos"),t(),n(1119,"pre"),r(),n(1120,"code",3),e(1121,`import { createFeature, createReducer } from '@ngrx/store';

export const productsFeature = createFeature({
  name: 'products',            // nombre tipado, una sola vez
  reducer: createReducer(initialState, /* ...on() */),
});

// Genera autom\xE1ticamente el feature selector y un selector
// por cada propiedad top-level del state:
productsFeature.selectProductsState;  // \u2190 feature selector
productsFeature.selectLoading;        // \u2190 por cada propiedad
productsFeature.selectError;

// Registro sin string: imposible el typo 'product' vs 'products'
provideState(productsFeature);`),t(),i(),t(),n(1122,"h4"),e(1123,"\u26A0\uFE0F Errores comunes"),t(),n(1124,"ul")(1125,"li")(1126,"strong"),e(1127,"Olvidar "),n(1128,"code"),e(1129,"provideStore()"),t(),e(1130," en el root:"),t(),n(1131,"code"),e(1132,"provideState()"),t(),e(1133," en una ruta lazy falla si no existe el Store ra\xEDz en "),n(1134,"code"),e(1135,"app.config.ts"),t(),e(1136," (aunque sea vac\xEDo)."),t(),n(1137,"li")(1138,"strong"),e(1139,'Registrar el feature state en el root "por si acaso":'),t(),e(1140," pierdes el lazy loading \u2014 el reducer y sus imports entran en el bundle inicial."),t(),n(1141,"li")(1142,"strong"),e(1143,"provideEffects a nivel de componente en vez de ruta:"),t(),e(1144," los effects se registran cada vez que el componente se instancia; a nivel de ruta se registran una sola vez."),t(),n(1145,"li")(1146,"strong"),e(1147,"String del feature desincronizado"),t(),e(1148," entre "),n(1149,"code"),e(1150,"provideState('products', ...)"),t(),e(1151," y "),n(1152,"code"),e(1153,"createFeatureSelector('products')"),t(),e(1154," \u2014 usa createFeature para eliminarlo."),t()(),n(1155,"h4"),e(1156,"\u{1F3A4} Preguntas de entrevista"),t(),n(1157,"dl",4)(1158,"dt"),e(1159,"P: \xBFDiferencia entre provideStore y provideState?"),t(),n(1160,"dd"),e(1161,"R: provideStore se llama UNA vez en el root y crea el Store global (puede ir vac\xEDo). provideState registra un slice de feature, t\xEDpicamente en los providers de una ruta lazy."),t(),n(1162,"dt"),e(1163,"P: \xBFQu\xE9 gana una app registrando state en rutas lazy?"),t(),n(1164,"dd"),e(1165,"R: El reducer, effects y selectors del feature solo se cargan (bundle) y registran cuando el usuario navega a esa ruta \u2014 arranque m\xE1s r\xE1pido y aislamiento del dominio."),t(),n(1166,"dt"),e(1167,"P: \xBFQu\xE9 aporta createFeature?"),t(),n(1168,"dd"),e(1169,"R: Une nombre + reducer en un objeto tipado, genera el feature selector y un selector por propiedad del state, y elimina los strings m\xE1gicos duplicados."),t()(),n(1170,"div",5),e(1171," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(1172,"ul")(1173,"li")(1174,"code"),e(1175,"app.config.ts"),t(),e(1176," \u2014 provideStore() + provideStoreDevtools()"),t(),n(1177,"li")(1178,"code"),e(1179,"features/ngrx-lab/ngrx-lab.routes.ts"),t(),e(1180," \u2014 provideState('products') + provideEffects() a nivel de ruta"),t()()()(),n(1181,"div",21)(1182,"h3"),e(1183,"\u{1F6E0}\uFE0F @ngrx/store-devtools"),t(),n(1184,"p"),e(1185," Conecta el Store con la extensi\xF3n "),n(1186,"strong"),e(1187,"Redux DevTools"),t(),e(1188," del navegador: log de actions, inspecci\xF3n del \xE1rbol de estado, diffs entre estados, time-travel y export/import de sesiones. Es la raz\xF3n n\xFAmero uno por la que debuggear NgRx es m\xE1s f\xE1cil que debuggear servicios con estado disperso. "),t(),n(1189,"pre"),r(),n(1190,"code",3),e(1191,`import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';

provideStoreDevtools({
  maxAge: 25,                 // \xFAltimas N actions en memoria (default: false = ilimitado)
  logOnly: !isDevMode(),      // en prod: solo lectura, sin time-travel
  autoPause: true,            // pausa la grabaci\xF3n si DevTools est\xE1 cerrado
  trace: false,               // stack trace del origen de cada dispatch (costoso)
  traceLimit: 75,
  actionsBlocklist: ['[Mouse] Move'],   // filtra actions ruidosas del log
  connectInZone: true,        // integra con Zone.js para el timing correcto
})`),t(),i(),t(),n(1192,"h4"),e(1193,"Qu\xE9 mirar en DevTools cuando algo falla"),t(),n(1194,"ul")(1195,"li")(1196,"strong"),e(1197,"La action no aparece en el log"),t(),e(1198," \u2192 nunca se despach\xF3 (bug en el componente/facade)."),t(),n(1199,"li")(1200,"strong"),e(1201,"La action aparece pero el diff est\xE1 vac\xEDo"),t(),e(1202," \u2192 ning\xFAn reducer la maneja (falta el "),n(1203,"code"),e(1204,"on()"),t(),e(1205,") o el handler devolvi\xF3 el mismo objeto."),t(),n(1206,"li")(1207,"strong"),e(1208,"Aparece la action de trigger pero nunca Success/Failure"),t(),e(1209," \u2192 el effect no est\xE1 registrado, o muri\xF3 por un catchError mal puesto."),t(),n(1210,"li")(1211,"strong"),e(1212,"La misma action se repite sin fin"),t(),e(1213," \u2192 loop infinito entre effect y action."),t()(),n(1214,"h4"),e(1215,"\u26A0\uFE0F Errores comunes"),t(),n(1216,"ul")(1217,"li")(1218,"strong"),e(1219,"DevTools completo en producci\xF3n:"),t(),e(1220," mantiene el historial de estados en memoria y expone datos. Usa "),n(1221,"code"),e(1222,"logOnly: !isDevMode()"),t(),e(1223," o no lo registres en prod."),t(),n(1224,"li")(1225,"strong"),e(1226,"State no serializable"),t(),e(1227," (Date, Map, Set, instancias): el inspector muestra objetos vac\xEDos y el time-travel reconstruye estados corruptos."),t(),n(1228,"li")(1229,"strong"),e(1230,"maxAge sin l\xEDmite en apps con muchas actions:"),t(),e(1231," el historial crece indefinidamente \u2014 memoria del tab por las nubes."),t(),n(1232,"li")(1233,"strong"),e(1234,"trace: true siempre activado:"),t(),e(1235," capturar el stack trace de cada dispatch tiene costo real de rendimiento; act\xEDvalo solo mientras cazas un bug."),t()(),n(1236,"h4"),e(1237,"\u{1F3A4} Preguntas de entrevista"),t(),n(1238,"dl",4)(1239,"dt"),e(1240,"P: \xBFQu\xE9 es time-travel debugging y qu\xE9 lo hace posible?"),t(),n(1241,"dd"),e(1242,"R: Saltar a cualquier estado pasado re-aplicando la secuencia de actions con los reducers. Es posible porque los reducers son puros y el estado es inmutable y serializable: misma secuencia = mismo estado."),t(),n(1243,"dt"),e(1244,"P: \xBFPor qu\xE9 el estado debe ser serializable?"),t(),n(1245,"dd"),e(1246,"R: DevTools serializa estado y actions a JSON para inspecci\xF3n, export y time-travel. Adem\xE1s habilita hidrataci\xF3n (persistir/restaurar el store) y los runtimeChecks de NgRx lo validan en dev."),t(),n(1247,"dt"),e(1248,"P: \xBFC\xF3mo evitas que actions muy frecuentes ensucien el log?"),t(),n(1249,"dd"),e(1250,"R: Con actionsBlocklist (o actionsSafelist para lo inverso) en la configuraci\xF3n de provideStoreDevtools."),t()(),n(1251,"div",5),e(1252," \u{1F4C2} "),n(1253,"code"),e(1254,"app.config.ts"),t(),e(1255," \u2014 provideStoreDevtools con maxAge y logOnly "),t()(),n(1256,"div",22)(1257,"h3"),e(1258,"\u{1F6A6} NgRx Store vs SignalStore (@ngrx/signals)"),t(),n(1259,"p")(1260,"code"),e(1261,"@ngrx/signals"),t(),e(1262," es la librer\xEDa moderna del equipo NgRx construida 100% sobre Signals. En vez del ciclo action \u2192 reducer \u2192 selector, defines un store con "),n(1263,"strong"),e(1264,"estado, computeds y m\xE9todos"),t(),e(1265," \u2014 m\xE1s directo, mucho menos boilerplate, pero sin el modelo de eventos global. "),t(),n(1266,"pre"),r(),n(1267,"code",3),e(1268,`import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';

export const ProductsStore = signalStore(
  { providedIn: 'root' },   // global; sin esto, se provee por componente (local)

  withState({
    products: [] as Product[],
    loading: false,
    error: null as string | null,
  }),

  withComputed((store) => ({
    total: computed(() => store.products().length),
    sustainable: computed(() =>
      store.products().filter((p) => p.sustainabilityScore >= 80)
    ),
  })),

  withMethods((store, api = inject(MockApiService)) => ({
    // rxMethod: side effects reactivos (equivale a un effect)
    loadProducts: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() =>
          api.getProducts().pipe(
            tapResponse({
              next: (products) => patchState(store, { products, loading: false }),
              error: (err: Error) =>
                patchState(store, { error: err.message, loading: false }),
            })
          )
        )
      )
    ),
  }))
);

// En el componente \u2014 sin dispatch, sin selectors:
export class ProductListComponent {
  store = inject(ProductsStore);
  // template: store.products(), store.loading(), store.sustainable()
  ngOnInit() { this.store.loadProducts(); }
}`),t(),i(),t(),n(1269,"table",14)(1270,"thead")(1271,"tr")(1272,"th"),e(1273,"Criterio"),t(),n(1274,"th"),e(1275,"NgRx Store (Redux)"),t(),n(1276,"th"),e(1277,"SignalStore (@ngrx/signals)"),t()()(),n(1278,"tbody")(1279,"tr")(1280,"td"),e(1281,"Paradigma"),t(),n(1282,"td"),e(1283,"Event-driven: actions globales, indirecci\xF3n total"),t(),n(1284,"td"),e(1285,"Llamadas directas a m\xE9todos del store"),t()(),n(1286,"tr")(1287,"td"),e(1288,"Boilerplate"),t(),n(1289,"td"),e(1290,"Actions + reducer + selectors + effects"),t(),n(1291,"td"),e(1292,"Un archivo: withState/withComputed/withMethods"),t()(),n(1293,"tr")(1294,"td"),e(1295,"Trazabilidad"),t(),n(1296,"td"),e(1297,"Redux DevTools, time-travel, log de eventos"),t(),n(1298,"td"),e(1299,"Limitada (no hay log de actions nativo)"),t()(),n(1300,"tr")(1301,"td"),e(1302,"Reactividad"),t(),n(1303,"td"),e(1304,"Observables (+ selectSignal como puente)"),t(),n(1305,"td"),e(1306,"Signals nativos \u2014 integra con OnPush/zoneless gratis"),t()(),n(1307,"tr")(1308,"td"),e(1309,"Alcance"),t(),n(1310,"td"),e(1311,"Global por dise\xF1o"),t(),n(1312,"td"),e(1313,"Global o local (por componente/ruta)"),t()(),n(1314,"tr")(1315,"td"),e(1316,"Colecciones"),t(),n(1317,"td"),e(1318,"@ngrx/entity"),t(),n(1319,"td"),e(1320,"withEntities() de @ngrx/signals/entities"),t()(),n(1321,"tr")(1322,"td"),e(1323,"Extensibilidad"),t(),n(1324,"td"),e(1325,"Meta-reducers, router-store"),t(),n(1326,"td"),e(1327,"Custom features (withX composables)"),t()()()(),n(1328,"h4"),e(1329,"\xBFCu\xE1ndo usar cada uno?"),t(),n(1330,"ul")(1331,"li")(1332,"strong"),e(1333,"NgRx Store cl\xE1sico:"),t(),e(1334," estado de dominio compartido por MUCHOS features, equipos grandes que necesitan trazabilidad de eventos, requisitos de auditor\xEDa/debugging con time-travel, o m\xFAltiples consumidores reaccionando al mismo evento."),t(),n(1335,"li")(1336,"strong"),e(1337,"SignalStore:"),t(),e(1338," estado de un feature o componente complejo, apps nuevas signal-first/zoneless, equipos peque\xF1os que priorizan velocidad de desarrollo sobre el event log."),t(),n(1339,"li")(1340,"strong"),e(1341,"Pueden convivir:"),t(),e(1342," Store global para el dominio transversal (auth, carrito) + SignalStores locales por feature es una arquitectura perfectamente v\xE1lida hoy."),t()(),n(1343,"h4"),e(1344,"\u26A0\uFE0F Errores comunes"),t(),n(1345,"ul")(1346,"li")(1347,"strong"),e(1348,'Asumir que SignalStore "reemplaza" a NgRx Store:'),t(),e(1349," son trade-offs distintos; pierdes el modelo de eventos y el tooling de Redux."),t(),n(1350,"li")(1351,"strong"),e(1352,"Mutar el state en vez de usar "),n(1353,"code"),e(1354,"patchState"),t(),e(1355,":"),t(),e(1356," los signals internos son readonly; toda escritura pasa por patchState/updateState."),t(),n(1357,"li")(1358,"strong"),e(1359,"Olvidar "),n(1360,"code"),e(1361,"{ providedIn: 'root' }"),t()(),e(1362," cuando quieres un store global \u2014 sin \xE9l, cada componente que lo provea tiene SU PROPIA instancia."),t(),n(1363,"li")(1364,"strong"),e(1365,"Suscripciones manuales para side effects"),t(),e(1366," en vez de "),n(1367,"code"),e(1368,"rxMethod"),t(),e(1369,", que gestiona la suscripci\xF3n y la limpieza autom\xE1ticamente."),t()(),n(1370,"h4"),e(1371,"\u{1F3A4} Preguntas de entrevista"),t(),n(1372,"dl",4)(1373,"dt"),e(1374,"P: \xBFDiferencia fundamental entre NgRx Store y SignalStore?"),t(),n(1375,"dd"),e(1376,"R: NgRx Store es event-driven: despachas actions y reducers/effects reaccionan (indirecci\xF3n + trazabilidad). SignalStore expone estado y m\xE9todos que llamas directamente: menos ceremonia, menos trazabilidad."),t(),n(1377,"dt"),e(1378,"P: \xBFQu\xE9 es rxMethod?"),t(),n(1379,"dd"),e(1380,"R: Un m\xE9todo reactivo que acepta valores, signals u observables como input y ejecuta un pipeline RxJS gestionando la suscripci\xF3n \u2014 el equivalente de un effect dentro de un SignalStore."),t(),n(1381,"dt"),e(1382,"P: \xBFPueden convivir en la misma app?"),t(),n(1383,"dd"),e(1384,"R: S\xED. Es com\xFAn mantener el Store Redux para dominio global existente e introducir SignalStores en features nuevas."),t(),n(1385,"dt"),e(1386,"P: \xBFSignalStore puede ser local?"),t(),n(1387,"dd"),e(1388,"R: S\xED: si lo agregas a los providers de un componente, vive y muere con \xE9l \u2014 ideal para estado de UI complejo pero no global."),t()(),n(1389,"div",5),e(1390," \u{1F4C2} Compara con "),n(1391,"code"),e(1392,"features/ngrx-lab/store/"),t(),e(1393," \u2014 el mismo CRUD implementado con el patr\xF3n Redux cl\xE1sico "),t()(),n(1394,"div",23)(1395,"h3"),e(1396,"\u{1F9EA} Testing NgRx"),t(),n(1397,"p"),e(1398," La gran ventaja de NgRx: casi todo es una "),n(1399,"strong"),e(1400,"funci\xF3n pura"),t(),e(1401,". Reducers y selectors se testean sin Angular; para componentes existe "),n(1402,"code"),e(1403,"provideMockStore"),t(),e(1404," y para effects, "),n(1405,"code"),e(1406,"provideMockActions"),t(),e(1407,". "),t(),n(1408,"h4"),e(1409,"Reducers \u2014 funciones puras"),t(),n(1410,"pre"),r(),n(1411,"code",3),e(1412,`it('activa loading al despachar loadProducts', () => {
  const state = productReducer(initialState, ProductActions.loadProducts());
  expect(state.loading).toBe(true);
  expect(state).not.toBe(initialState);   // referencia NUEVA (inmutabilidad)
});`),t(),i(),t(),n(1413,"h4"),e(1414,"Selectors \u2014 projector()"),t(),n(1415,"pre"),r(),n(1416,"code",3),e(1417,`it('selecciona el producto activo', () => {
  const entities = { '1': mockProduct };
  expect(selectSelectedProduct.projector('1', entities)).toEqual(mockProduct);
  expect(selectSelectedProduct.projector(null, entities)).toBeNull();
});`),t(),i(),t(),n(1418,"h4"),e(1419,"Effects \u2014 provideMockActions"),t(),n(1420,"pre"),r(),n(1421,"code",3),e(1422,`import { provideMockActions } from '@ngrx/effects/testing';

it('emite success cuando el API responde', (done) => {
  const actions$ = of(ProductActions.loadProducts());
  TestBed.configureTestingModule({
    providers: [
      ProductEffects,
      provideMockActions(() => actions$),
      { provide: MockApiService, useValue: { getProducts: () => of([mockProduct]) } },
    ],
  });

  TestBed.inject(ProductEffects).loadProducts$.subscribe((action) => {
    expect(action).toEqual(
      ProductActions.loadProductsSuccess({ products: [mockProduct] })
    );
    done();
  });
});`),t(),i(),t(),n(1423,"h4"),e(1424,"Componentes \u2014 provideMockStore"),t(),n(1425,"pre"),r(),n(1426,"code",3),e(1427,`import { provideMockStore, MockStore } from '@ngrx/store/testing';

TestBed.configureTestingModule({
  providers: [
    provideMockStore({
      selectors: [
        { selector: selectAllProducts, value: [mockProduct] },
        { selector: selectLoading, value: false },
      ],
    }),
  ],
});

const store = TestBed.inject(MockStore);

// Cambiar el valor de un selector a mitad de test:
store.overrideSelector(selectLoading, true);
store.refreshState();          // \u2190 imprescindible para re-emitir
fixture.detectChanges();

// Verificar dispatches:
const spy = jest.spyOn(store, 'dispatch');
component.onDelete('1');
expect(spy).toHaveBeenCalledWith(ProductActions.deleteProduct({ id: '1' }));`),t(),i(),t(),n(1428,"h4"),e(1429,"\u26A0\uFE0F Errores comunes"),t(),n(1430,"ul")(1431,"li")(1432,"strong"),e(1433,"Usar el Store real en tests de componente:"),t(),e(1434," acoplas el test a reducers/effects. provideMockStore a\xEDsla el componente por completo."),t(),n(1435,"li")(1436,"strong"),e(1437,"Olvidar "),n(1438,"code"),e(1439,"refreshState()"),t()(),e(1440," despu\xE9s de overrideSelector \u2014 el componente sigue viendo el valor anterior."),t(),n(1441,"li")(1442,"strong"),e(1443,"Testear effects con el servicio HTTP real"),t(),e(1444," en vez de un stub \u2014 lento y fr\xE1gil."),t(),n(1445,"li")(1446,"strong"),e(1447,"No testear el caso de error del effect:"),t(),e(1448," es exactamente donde viven los bugs (catchError mal ubicado, mensaje perdido)."),t()(),n(1449,"h4"),e(1450,"\u{1F3A4} Preguntas de entrevista"),t(),n(1451,"dl",4)(1452,"dt"),e(1453,"P: \xBFPor qu\xE9 NgRx facilita el testing?"),t(),n(1454,"dd"),e(1455,"R: Reducers y selectors son funciones puras (input \u2192 output, sin mocks), los effects a\xEDslan TODOS los side effects en un solo lugar, y provideMockStore permite testear componentes sin tocar la l\xF3gica de estado."),t(),n(1456,"dt"),e(1457,"P: \xBFC\xF3mo testeas un componente que usa selectSignal?"),t(),n(1458,"dd"),e(1459,"R: Igual que con select: provideMockStore con selectors mockeados; selectSignal lee del MockStore. Para cambios en runtime, overrideSelector + refreshState."),t(),n(1460,"dt"),e(1461,"P: \xBFQu\xE9 provee provideMockActions?"),t(),n(1462,"dd"),e(1463,"R: Reemplaza el stream Actions por uno controlado por el test (Observable o Subject), para emitir exactamente las actions que quieres y verificar qu\xE9 emite el effect."),t()(),n(1464,"div",5),e(1465," \u{1F4C2} "),n(1466,"code"),e(1467,"features/ngrx-lab/store/"),t(),e(1468," \u2014 reducer, selectors y effects listos para aplicar estos patrones de test "),t()()()),o&2&&(a(43),c(`// Ejemplo m\xEDnimo \u2014 Action
export const loadProducts = createAction('[Product Page] Load Products');

// Reducer
export const productReducer = createReducer(
  initialState,
  on(loadProducts, (state) => (`,"{{"," ...state, loading: true ","}}",`))
);

// Selector
export const selectAllProducts = createSelector(
  selectProductState,
  (state) => state.products
);`),a(66),l(`// Effect \u2014 escucha loadProducts, llama al API, despacha success/failure
loadProducts$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ProductActions.loadProducts),
    switchMap(() =>
      this.productService.getAll().pipe(
        map(products => ProductActions.loadProductsSuccess(`,"{"," products ","}",`)),
        catchError(error => of(ProductActions.loadProductsFailure(`,"{"," error ","}",`)))
      )
    )
  )
);`),a(834),l("","{"," ids: [], entities: ","{","","}"," ","}"),a(4),m(["import ","{"," createEntityAdapter, EntityState ","}",` from '@ngrx/entity';

export interface Product `,"{",`
  id: string;
  name: string;
  sustainabilityScore: number;
`,"}",`

// Crear el adapter
export const productAdapter = createEntityAdapter<Product>();

// Estado inicial normalizado
export interface ProductState extends EntityState<Product> `,"{",`
  loading: boolean;
  error: string | null;
  selectedId: string | null;
`,"}",`

export const initialState: ProductState = productAdapter.getInitialState(`,"{",`
  loading: false,
  error: null,
  selectedId: null,
`,"}",`);

// En el reducer \u2014 operaciones CRUD limpias
on(loadProductsSuccess, (state, `,"{"," products ","}",`) =>
  productAdapter.setAll(products, `,"{"," ...state, loading: false ","}",`)
),
on(addProductSuccess, (state, `,"{"," product ","}",`) =>
  productAdapter.addOne(product, state)
),`]),a(167),u(`// app.config.ts \u2014 Setup global
export const appConfig: ApplicationConfig = `,"{",`
  providers: [
    provideStore(),          // Store vac\xEDo ra\xEDz
    provideEffects(),        // Effects ra\xEDz
    provideStoreDevtools(`,"{"," maxAge: 25 ","}",`),
  ]
`,"}",`;

// Feature routes \u2014 lazy loaded con su propio state
export const NGRX_LAB_ROUTES: Routes = [`,"{",`
  path: '',
  providers: [
    provideState('products', productReducer),   // Feature state
    provideEffects(ProductEffects),              // Feature effects
  ],
  loadComponent: () => import('./ngrx-layout').then(m => m.NgrxLayoutComponent),
  children: [...]
`,"}","];"))},dependencies:[p],styles:[".learn-page[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;padding:1rem 0}.page-title[_ngcontent-%COMP%]{font-size:1.3rem;margin-bottom:1.2rem;color:var(--text)}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:1.4rem;margin-bottom:1rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:.8rem;color:var(--accent-blue)}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text);line-height:1.6;margin-bottom:.6rem}.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:1.4rem;color:var(--text);line-height:1.7;margin-bottom:.8rem}.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.3rem}.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1rem;margin:1.2rem 0 .5rem;color:var(--accent-purple)}.card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:.9rem;margin:.9rem 0 .4rem;color:var(--text)}.qa[_ngcontent-%COMP%]{margin:.4rem 0 .8rem;padding-left:.2rem}.qa[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{font-weight:600;color:var(--accent-blue);margin-top:.55rem;line-height:1.5}.qa[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:.15rem 0 0;color:var(--text);line-height:1.55}.card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--accent-purple)}.card[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--bg-code, rgba(110,118,129,.15));padding:.15rem .4rem;border-radius:4px;font-size:.85rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:8px;padding:1rem;overflow-x:auto;margin:.8rem 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:none;padding:0;font-size:.82rem;line-height:1.5;color:var(--text)}.flow-diagram[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:.3rem;margin:.8rem 0;font-size:.9rem}.flow-step[_ngcontent-%COMP%]{background:var(--accent-blue);color:#fff;padding:.3rem .8rem;border-radius:6px;font-weight:600}.flow-arrow[_ngcontent-%COMP%]{color:var(--text-muted);font-weight:500}.compare-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:.8rem 0;font-size:.85rem}.compare-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .compare-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid var(--border);padding:.5rem .7rem;text-align:left;color:var(--text)}.compare-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#58a6ff1a;font-weight:600}.compare-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#58a6ff0a}@media (max-width: 600px){.flow-diagram[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.compare-table[_ngcontent-%COMP%]{font-size:.78rem}}"]})};export{E as NgrxLearnComponent};
