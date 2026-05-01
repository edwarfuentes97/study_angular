import{a as m}from"./chunk-EVHMM366.js";import"./chunk-WS4L6SOG.js";import{Db as n,Eb as t,Ta as o,Zb as e,ac as s,cc as c,dc as u,fb as l,fc as p,sa as r,ta as i}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var g=class d{static \u0275fac=function(a){return new(a||d)};static \u0275cmp=l({type:d,selectors:[["app-ngrx-learn"]],decls:443,vars:30,consts:[["appAutoGlossary","",1,"learn-page"],[1,"page-title"],["id","que-es-ngrx",1,"card"],[1,"language-typescript"],[1,"code-ref"],["id","flujo-de-datos",1,"card"],[1,"flow-diagram"],[1,"flow-step"],[1,"flow-arrow"],["id","ciclo-de-vida-ngrx",1,"card"],["id","patrones-avanzados-ngrx",1,"card"],["id","cuando-usar-ngrx-vs-servicios-simples",1,"card"],[1,"compare-table"],["id","64ngrx-entity-entityadapter",1,"card"],["id","standalone-integration-angular-20",1,"card"]],template:function(a,x){a&1&&(n(0,"div",0)(1,"h2",1),e(2,"\u{1F4D6} NgRx \u2014 Teor\xEDa y Conceptos"),t(),n(3,"div",2)(4,"h3"),e(5,"\u{1F534} \xBFQu\xE9 es NgRx?"),t(),n(6,"p"),e(7," NgRx es la implementaci\xF3n del "),n(8,"strong"),e(9,"patr\xF3n Redux"),t(),e(10," para Angular. Proporciona un flujo unidireccional de datos predecible mediante cinco piezas clave: "),t(),n(11,"ul")(12,"li")(13,"strong"),e(14,"Store:"),t(),e(15," Fuente \xFAnica de verdad \u2014 un objeto inmutable que contiene todo el estado de la app."),t(),n(16,"li")(17,"strong"),e(18,"Actions:"),t(),e(19," Eventos que describen "),n(20,"em"),e(21,"qu\xE9 pas\xF3"),t(),e(22," (nunca c\xF3mo). Formato: "),n(23,"code"),e(24,"[Source] Event"),t(),e(25,"."),t(),n(26,"li")(27,"strong"),e(28,"Reducers:"),t(),e(29," Funciones puras que reciben el estado actual + una action y retornan un "),n(30,"strong"),e(31,"nuevo"),t(),e(32," estado."),t(),n(33,"li")(34,"strong"),e(35,"Selectors:"),t(),e(36," Funciones memoizadas que extraen y computan slices del Store."),t(),n(37,"li")(38,"strong"),e(39,"Effects:"),t(),e(40," Manejan side effects (HTTP, WebSocket, localStorage) fuera del reducer."),t()(),n(41,"pre")(42,"code",3),e(43),t()(),n(44,"div",4),e(45," \u{1F4C2} Implementaci\xF3n completa en el proyecto: "),n(46,"ul")(47,"li")(48,"code"),e(49,"features/ngrx-lab/store/product.actions.ts"),t(),e(50," \u2014 Actions: loadProducts, createProduct, updateProduct, deleteProduct"),t(),n(51,"li")(52,"code"),e(53,"features/ngrx-lab/store/product.reducer.ts"),t(),e(54," \u2014 Reducer con createReducer + EntityAdapter"),t(),n(55,"li")(56,"code"),e(57,"features/ngrx-lab/store/product.effects.ts"),t(),e(58," \u2014 Effects: switchMap, exhaustMap, mergeMap"),t(),n(59,"li")(60,"code"),e(61,"features/ngrx-lab/store/product.selectors.ts"),t(),e(62," \u2014 Selectors: selectAll, selectLoading, selectHighSustainability"),t(),n(63,"li")(64,"code"),e(65,"features/ngrx-lab/store/product.state.ts"),t(),e(66," \u2014 State: EntityState<Product> + loading, error"),t()()()(),n(67,"div",5)(68,"h3"),e(69,"\u{1F504} Flujo de Datos"),t(),n(70,"p"),e(71,"El ciclo completo de datos en NgRx sigue este camino:"),t(),n(72,"div",6)(73,"span",7),e(74,"Component"),t(),n(75,"span",8),e(76,"\u2192 dispatch(Action) \u2192"),t(),n(77,"span",7),e(78,"Reducer"),t(),n(79,"span",8),e(80,"\u2192"),t(),n(81,"span",7),e(82,"Store"),t(),n(83,"span",8),e(84,"\u2192 Selector \u2192"),t(),n(85,"span",7),e(86,"Component"),t()(),n(87,"p"),e(88,"Para operaciones as\xEDncronas, los "),n(89,"strong"),e(90,"Effects"),t(),e(91," interceptan la action, realizan el side effect y despachan una nueva action con el resultado:"),t(),n(92,"pre")(93,"code",3),e(94),t()(),n(95,"div",4),e(96," \u{1F4C2} "),n(97,"code"),e(98,"features/ngrx-lab/components/product-list.ts"),t(),e(99," \u2014 Smart Component que despacha actions y lee selectors "),t()(),n(100,"div",9)(101,"h3"),e(102,"\u{1F501} Ciclo de Vida Completo de NgRx"),t(),n(103,"h4"),e(104,"1. El ciclo completo paso a paso"),t(),n(105,"p")(106,"strong"),e(107,"Flujo s\xEDncrono (sin side effects):"),t()(),n(108,"pre"),i(),n(109,"code"),e(110,`Usuario hace click
  \u2192 Component.dispatch(action)
    \u2192 Store recibe action
      \u2192 Reducer procesa action \u2192 produce nuevo state
        \u2192 Store notifica selectors
          \u2192 Selectors re-calculan (si el input cambi\xF3)
            \u2192 Component recibe nuevo valor
              \u2192 View se actualiza`),t(),r(),t(),n(111,"p")(112,"strong"),e(113,"Flujo con side effects (HTTP, WebSocket, etc.):"),t()(),n(114,"pre"),i(),n(115,"code"),e(116,`Action despachada (ej: loadProducts)
  \u2192 Effect escucha con ofType(loadProducts)
    \u2192 Llama al API (HTTP / WebSocket / localStorage)
      \u2192 \xC9xito: Effect despacha loadProductsSuccess({ products })
      \u2192 Error: Effect despacha loadProductsFailure({ error })
        \u2192 Reducer procesa Success o Failure
          \u2192 Nuevo state (products cargados O error guardado)
            \u2192 Selectors recalculan \u2192 Component se actualiza`),t(),r(),t(),n(117,"h4"),e(118,"2. Actions en detalle"),t(),n(119,"p"),e(120," Las actions describen "),n(121,"strong"),e(122,"QU\xC9 pas\xF3"),t(),e(123,", nunca C\xD3MO reaccionar. Convenci\xF3n de naming: "),n(124,"code"),e(125,"[Source] Event"),t(),e(126,". "),t(),n(127,"pre"),i(),n(128,"code",3),e(129,`import { createAction, props, createActionGroup } from '@ngrx/store';

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
this.store.dispatch(ProductActions.deleteProduct({ id: '123' }));`),t(),r(),t(),n(130,"h4"),e(131,"3. Reducer en detalle"),t(),n(132,"p"),e(133," Funci\xF3n pura: "),n(134,"code"),e(135,"(state, action) => newState"),t(),e(136,". "),n(137,"strong"),e(138,"NUNCA"),t(),e(139," muta el state directamente \u2014 siempre usa spread operator para crear un nuevo objeto. "),t(),n(140,"pre"),i(),n(141,"code",3),e(142,`import { createReducer, on } from '@ngrx/store';
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
provideState('products', productReducer);`),t(),r(),t(),n(143,"h4"),e(144,"4. Effects en detalle"),t(),n(145,"p"),e(146," Effects manejan side effects fuera del reducer. Se crean con "),n(147,"code"),e(148,"createEffect()"),t(),e(149," y escuchan el stream de actions con "),n(150,"code"),e(151,"ofType()"),t(),e(152,". "),t(),n(153,"h5"),e(154,"Operadores cr\xEDticos en Effects:"),t(),n(155,"ul")(156,"li")(157,"strong"),e(158,"switchMap"),t(),e(159," \u2192 para LOAD (cancela petici\xF3n anterior si llega otra)"),t(),n(160,"li")(161,"strong"),e(162,"exhaustMap"),t(),e(163," \u2192 para CREATE/LOGIN (ignora clicks duplicados)"),t(),n(164,"li")(165,"strong"),e(166,"mergeMap"),t(),e(167," \u2192 para DELETE (varias en paralelo)"),t(),n(168,"li")(169,"strong"),e(170,"concatMap"),t(),e(171," \u2192 para UPDATE (mantiene el orden)"),t()(),n(172,"pre"),i(),n(173,"code",3),e(174,`import { createEffect, Actions, ofType } from '@ngrx/effects';

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
}`),t(),r(),t(),n(175,"h5"),e(176,"\u26A0\uFE0F Error handling \u2014 SIEMPRE catchError DENTRO del operador de aplanamiento:"),t(),n(177,"pre"),i(),n(178,"code",3),e(179,`// \u2705 CORRECTO \u2014 el effect sigue vivo despu\xE9s de un error
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
);`),t(),r(),t(),n(180,"h5"),e(181,"Non-dispatching effects y lifecycle hooks:"),t(),n(182,"pre"),i(),n(183,"code",3),e(184,`// Non-dispatching effect \u2014 para logging, navigation, analytics
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
}`),t(),r(),t(),n(185,"h4"),e(186,"5. Selectors en detalle"),t(),n(187,"p"),e(188," Los selectors son funciones "),n(189,"strong"),e(190,"memoizadas"),t(),e(191," que extraen y computan slices del Store. Solo recalculan si su input cambi\xF3 (igualdad por referencia). "),t(),n(192,"pre"),i(),n(193,"code",3),e(194,`import { createFeatureSelector, createSelector } from '@ngrx/store';

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
// products() retorna Product[] \u2014 sin async pipe, s\xEDncrono`),t(),r(),t(),n(195,"h4"),e(196,"6. Store lifecycle en un componente"),t(),n(197,"pre"),i(),n(198,"code",3),e(199,`@Component({
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
}`),t(),r(),t(),n(200,"h4"),e(201,"7. DevTools y Debugging"),t(),n(202,"p"),e(203," NgRx DevTools permite inspeccionar el estado, ver cada action despachada, hacer time-travel, y exportar/importar sesiones completas para debugging. "),t(),n(204,"pre"),i(),n(205,"code",3),e(206,`// app.config.ts \u2014 configurar DevTools
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
};`),t(),r(),t(),n(207,"p")(208,"strong"),e(209,"Funcionalidades de Redux DevTools:"),t()(),n(210,"ul")(211,"li")(212,"strong"),e(213,"State inspection:"),t(),e(214," Ver todo el \xE1rbol de estado en cualquier momento"),t(),n(215,"li")(216,"strong"),e(217,"Action log:"),t(),e(218," Cada action despachada con timestamp y payload"),t(),n(219,"li")(220,"strong"),e(221,"Time travel:"),t(),e(222," Retroceder y avanzar entre estados para reproducir bugs"),t(),n(223,"li")(224,"strong"),e(225,"State diff:"),t(),e(226," Ver exactamente qu\xE9 cambi\xF3 entre cada action"),t(),n(227,"li")(228,"strong"),e(229,"Export/Import:"),t(),e(230," Guardar y reproducir sesiones completas de debugging"),t()(),n(231,"div",4),e(232," \u{1F4C2} Implementaci\xF3n completa en el proyecto: "),n(233,"ul")(234,"li")(235,"code"),e(236,"features/ngrx-lab/store/product.actions.ts"),t(),e(237," \u2014 Actions con createActionGroup"),t(),n(238,"li")(239,"code"),e(240,"features/ngrx-lab/store/product.reducer.ts"),t(),e(241," \u2014 Reducer con EntityAdapter"),t(),n(242,"li")(243,"code"),e(244,"features/ngrx-lab/store/product.effects.ts"),t(),e(245," \u2014 Effects con switchMap, exhaustMap, mergeMap"),t(),n(246,"li")(247,"code"),e(248,"features/ngrx-lab/store/product.selectors.ts"),t(),e(249," \u2014 Selectors memoizados"),t(),n(250,"li")(251,"code"),e(252,"features/ngrx-lab/components/product-list.ts"),t(),e(253," \u2014 Component con selectSignal y dispatch"),t()()()(),n(254,"div",10)(255,"h3"),e(256,"\u{1F9E9} Patrones Avanzados de NgRx"),t(),n(257,"h4"),e(258,"1. Facade Pattern"),t(),n(259,"p"),e(260,' Un servicio "facade" encapsula el Store \u2014 los componentes '),n(261,"strong"),e(262,"nunca inyectan Store directamente"),t(),e(263,". Esto desacopla los componentes de NgRx, facilita testing, y centraliza la l\xF3gica de dispatch/select. "),t(),n(264,"pre"),i(),n(265,"code",3),e(266,`// product.facade.ts \u2014 encapsula TODO el acceso al Store
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
}`),t(),r(),t(),n(267,"h4"),e(268,"2. Optimistic Updates"),t(),n(269,"p"),e(270," Actualizar la UI "),n(271,"strong"),e(272,"inmediatamente"),t(),e(273," antes de que el API responda, y revertir si falla. Mejora la UX percibida. "),t(),n(274,"pre"),i(),n(275,"code",3),e(276,`// Reducer \u2014 actualiza INMEDIATAMENTE al despachar deleteProduct
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
);`),t(),r(),t(),n(277,"h4"),e(278,"3. Entity Pattern \u2014 Normalizaci\xF3n"),t(),n(279,"p")(280,"strong"),e(281,"\xBFPor qu\xE9 no usar arrays?"),t(),e(282," Buscar un item en un array es O(n). Con "),n(283,"code"),e(284,"EntityAdapter"),t(),e(285,", los datos se guardan como "),n(286,"code"),e(287,"{ ids: string[], entities: { [id]: Entity } }"),t(),e(288,", haciendo lookups O(1). Elimina duplicados y simplifica updates. "),t(),n(289,"pre"),i(),n(290,"code",3),e(291,`// \u274C Con array \u2014 lento, propenso a duplicados
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
  adapter.getSelectors();`),t(),r(),t(),n(292,"h4"),e(293,"4. Router Store"),t(),n(294,"p")(295,"code"),e(296,"@ngrx/router-store"),t(),e(297," sincroniza el estado de la ruta de Angular con el NgRx Store. Permite crear selectors basados en par\xE1metros de la URL. "),t(),n(298,"pre"),i(),n(299,"code",3),e(300,`// app.config.ts \u2014 registrar Router Store
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
// Se actualiza autom\xE1ticamente al navegar a /products/:id`),t(),r(),t(),n(301,"h4"),e(302,"5. Meta-reducers"),t(),n(303,"p"),e(304," Meta-reducers son "),n(305,"strong"),e(306,"middleware"),t(),e(307," que interceptan TODAS las actions antes de que lleguen a los reducers. \xDAtiles para logging, freeze de state en dev, y limpiar state al hacer logout. "),t(),n(308,"pre"),i(),n(309,"code",3),e(310,`import { MetaReducer, ActionReducer } from '@ngrx/store';

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
provideStore({ router: routerReducer }, { metaReducers });`),t(),r(),t(),n(311,"div",4),e(312," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(313,"ul")(314,"li")(315,"code"),e(316,"features/ngrx-lab/store/product.effects.ts"),t(),e(317," \u2014 Effects con operadores switchMap, exhaustMap, mergeMap"),t(),n(318,"li")(319,"code"),e(320,"features/ngrx-lab/store/product.selectors.ts"),t(),e(321," \u2014 Selectors compuestos y factory selectors"),t(),n(322,"li")(323,"code"),e(324,"features/ngrx-lab/store/product.reducer.ts"),t(),e(325," \u2014 EntityAdapter con operaciones CRUD"),t(),n(326,"li")(327,"code"),e(328,"app.config.ts"),t(),e(329," \u2014 provideStore() + provideStoreDevtools()"),t()()()(),n(330,"div",11)(331,"h3"),e(332,"\u2696\uFE0F \xBFCu\xE1ndo usar NgRx vs Servicios simples?"),t(),n(333,"table",12)(334,"thead")(335,"tr")(336,"th"),e(337,"Criterio"),t(),n(338,"th"),e(339,"Servicio con BehaviorSubject"),t(),n(340,"th"),e(341,"NgRx Store"),t()()(),n(342,"tbody")(343,"tr")(344,"td"),e(345,"Complejidad del estado"),t(),n(346,"td"),e(347,"Bajo \u2014 pocos datos compartidos"),t(),n(348,"td"),e(349,"Alto \u2014 muchos componentes leen/escriben"),t()(),n(350,"tr")(351,"td"),e(352,"Debugging"),t(),n(353,"td"),e(354,"console.log manual"),t(),n(355,"td"),e(356,"Redux DevTools, time-travel"),t()(),n(357,"tr")(358,"td"),e(359,"Boilerplate"),t(),n(360,"td"),e(361,"M\xEDnimo"),t(),n(362,"td"),e(363,"Actions + Reducer + Selectors + Effects"),t()(),n(364,"tr")(365,"td"),e(366,"Testabilidad"),t(),n(367,"td"),e(368,"Buena"),t(),n(369,"td"),e(370,"Excelente \u2014 cada pieza es una funci\xF3n pura"),t()(),n(371,"tr")(372,"td"),e(373,"Equipo grande"),t(),n(374,"td"),e(375,"Dif\xEDcil mantener consistencia"),t(),n(376,"td"),e(377,"Patr\xF3n \xFAnico, convenciones claras"),t()(),n(378,"tr")(379,"td"),e(380,"Side effects"),t(),n(381,"td"),e(382,"Dentro del servicio"),t(),n(383,"td"),e(384,"Aislados en Effects"),t()()()(),n(385,"p")(386,"strong"),e(387,"Regla pr\xE1ctica:"),t(),e(388," Si tu app tiene m\xE1s de 3 features que comparten estado, NgRx vale la pena."),t(),n(389,"div",4),e(390," \u{1F4C2} "),n(391,"code"),e(392,"core/services/progress.service.ts"),t(),e(393," \u2014 Ejemplo de servicio con Signals (alternativa simple a NgRx) "),t()(),n(394,"div",13)(395,"h3"),e(396,"\u{1F4E6} @ngrx/entity \u2014 EntityAdapter"),t(),n(397,"p")(398,"code"),e(399,"EntityAdapter"),t(),e(400," normaliza colecciones en un formato "),n(401,"code"),e(402),t(),e(403,", eliminando arrays anidados y haciendo lookups O(1) por ID. "),t(),n(404,"pre")(405,"code",3),e(406),t()(),n(407,"p")(408,"strong"),e(409,"\xBFPor qu\xE9 normalizar?"),t(),e(410," Evita duplicados, simplifica updates, y los selectors son m\xE1s eficientes."),t(),n(411,"div",4),e(412," \u{1F4C2} "),n(413,"code"),e(414,"features/ngrx-lab/store/product.reducer.ts"),t(),e(415," \u2014 EntityAdapter con addOne, setAll, updateOne, removeOne "),t()(),n(416,"div",14)(417,"h3"),e(418,"\u26A1 Standalone Integration (Angular 20+)"),t(),n(419,"p"),e(420," En Angular moderno no necesitas "),n(421,"code"),e(422,"StoreModule.forRoot()"),t(),e(423,". Usa las funciones "),n(424,"code"),e(425,"provide*"),t(),e(426," directamente: "),t(),n(427,"pre")(428,"code",3),e(429),t()(),n(430,"p"),e(431,"Cada feature registra su estado de forma lazy \u2014 solo se carga cuando el usuario navega ah\xED."),t(),n(432,"div",4),e(433," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(434,"ul")(435,"li")(436,"code"),e(437,"app.config.ts"),t(),e(438," \u2014 provideStore() + provideStoreDevtools()"),t(),n(439,"li")(440,"code"),e(441,"features/ngrx-lab/ngrx-lab.routes.ts"),t(),e(442," \u2014 provideState('products') + provideEffects() a nivel de ruta"),t()()()()()),a&2&&(o(43),s(`// Ejemplo m\xEDnimo \u2014 Action
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
);`),o(51),c(`// Effect \u2014 escucha loadProducts, llama al API, despacha success/failure
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
);`),o(308),c("","{"," ids: [], entities: ","{","","}"," ","}"),o(4),p(["import ","{"," createEntityAdapter, EntityState ","}",` from '@ngrx/entity';

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
),`]),o(23),u(`// app.config.ts \u2014 Setup global
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
`,"}","];"))},dependencies:[m],styles:[".learn-page[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;padding:1rem 0}.page-title[_ngcontent-%COMP%]{font-size:1.3rem;margin-bottom:1.2rem;color:var(--text)}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:1.4rem;margin-bottom:1rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:.8rem;color:var(--accent-blue)}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text);line-height:1.6;margin-bottom:.6rem}.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:1.4rem;color:var(--text);line-height:1.7;margin-bottom:.8rem}.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.3rem}.card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--accent-purple)}.card[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--bg-code, rgba(110,118,129,.15));padding:.15rem .4rem;border-radius:4px;font-size:.85rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:8px;padding:1rem;overflow-x:auto;margin:.8rem 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:none;padding:0;font-size:.82rem;line-height:1.5;color:var(--text)}.flow-diagram[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:.3rem;margin:.8rem 0;font-size:.9rem}.flow-step[_ngcontent-%COMP%]{background:var(--accent-blue);color:#fff;padding:.3rem .8rem;border-radius:6px;font-weight:600}.flow-arrow[_ngcontent-%COMP%]{color:var(--text-muted);font-weight:500}.compare-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:.8rem 0;font-size:.85rem}.compare-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .compare-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid var(--border);padding:.5rem .7rem;text-align:left;color:var(--text)}.compare-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#58a6ff1a;font-weight:600}.compare-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#58a6ff0a}@media (max-width: 600px){.flow-diagram[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.compare-table[_ngcontent-%COMP%]{font-size:.78rem}}"]})};export{g as NgrxLearnComponent};
