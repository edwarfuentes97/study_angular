import{Gb as n,Hb as t,Zb as e,fb as a,sa as o,ta as i}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var u=class d{static \u0275fac=function(r){return new(r||d)};static \u0275cmp=a({type:d,selectors:[["app-arch-learn"]],decls:436,vars:0,consts:[["appAutoGlossary","",1,"cards"],["id","1-smart-dumb-component-pattern",1,"card"],[1,"code-ref"],["id","2-comunicacion-entre-componentes",1,"card"],["id","3-estructura-de-carpetas-enterprise",1,"card"],["id","4-scam-standalone",1,"card"],["id","5-barrel-exports",1,"card"],["id","arquitectura-enterprise",1,"card"],["id","comunicacion-componentes",1,"card"],["id","state-management-decision",1,"card"]],template:function(r,s){r&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),e(3,"1 \xB7 Smart / Dumb Component Pattern"),t(),n(4,"p"),e(5," Los "),n(6,"strong"),e(7,"Smart components"),t(),e(8," (containers) gestionan el estado y la l\xF3gica de negocio: inyectan servicios, Store o signals y coordinan la comunicaci\xF3n con el backend. Los "),n(9,"strong"),e(10,"Dumb components"),t(),e(11," (presentacionales) solo reciben datos v\xEDa "),n(12,"code"),e(13,"@Input()"),t(),e(14," y emiten eventos con "),n(15,"code"),e(16,"@Output()"),t(),e(17,", usando "),n(18,"code"),e(19,"ChangeDetectionStrategy.OnPush"),t(),e(20," para m\xE1ximo rendimiento. Esta separaci\xF3n facilita testing, reutilizaci\xF3n y mantenimiento. "),t(),n(21,"pre")(22,"code"),e(23,`// \u2500\u2500\u2500 Smart container \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
@Component({
  template: \\\`
    <app-user-list
      [users]="users()"
      (select)="onSelect($event)" />
  \\\`
})
export class UserContainerComponent {
  private store = inject(Store);
  users = toSignal(this.store.select(selectAllUsers));

  onSelect(user: User) {
    this.store.dispatch(selectUser({ user }));
  }
}

// \u2500\u2500\u2500 Dumb presentational \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Output() select = new EventEmitter<User>();
}`),t()(),n(24,"div",2),e(25," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(26,"ul")(27,"li")(28,"code"),e(29,"features/ngrx-lab/components/product-list.ts"),t(),e(30," \u2014 Smart: dispatch + selectors"),t(),n(31,"li")(32,"code"),e(33,"features/ngrx-lab/components/product-card.ts"),t(),e(34," \u2014 Dumb: solo @Input/@Output + OnPush"),t(),n(35,"li")(36,"code"),e(37,"features/architecture-lab/architecture-lab.ts"),t(),e(38," \u2014 Patr\xF3n completo con 4 componentes"),t()()()(),n(39,"div",3)(40,"h3"),e(41,"2 \xB7 Comunicaci\xF3n entre Componentes"),t(),n(42,"p"),e(43," Angular ofrece varios mecanismos: "),n(44,"strong"),e(45,"@Input/@Output"),t(),e(46," para flujos padre\u2192hijo directos, "),n(47,"strong"),e(48,"servicios compartidos"),t(),e(49," con "),n(50,"code"),e(51,"BehaviorSubject"),t(),e(52," para componentes hermanos o desacoplados, "),n(53,"strong"),e(54,"Signals"),t(),e(55," como alternativa reactiva moderna, y "),n(56,"strong"),e(57,"NgRx Store"),t(),e(58," para estado global predecible. Usa el m\xE1s sencillo que resuelva el problema. "),t(),n(59,"pre")(60,"code"),e(61,`// \u2500\u2500\u2500 Servicio con BehaviorSubject \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private theme$ = new BehaviorSubject<'light' | 'dark'>('dark');
  current$ = this.theme$.asObservable();

  toggle() {
    this.theme$.next(
      this.theme$.value === 'dark' ? 'light' : 'dark'
    );
  }
}

// \u2500\u2500\u2500 Mismo servicio con Signals \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
@Injectable({ providedIn: 'root' })
export class ThemeSignalService {
  theme = signal<'light' | 'dark'>('dark');

  toggle() {
    this.theme.update(t => t === 'dark' ? 'light' : 'dark');
  }
}`),t()(),n(62,"div",2),e(63," \u{1F4C2} "),n(64,"code"),e(65,"features/architecture-lab/architecture-lab.ts"),t(),e(66," \u2014 @Input/@Output, servicios compartidos, signals "),t()(),n(67,"div",4)(68,"h3"),e(69,"3 \xB7 Estructura de Carpetas Enterprise"),t(),n(70,"p"),e(71," Organiza el proyecto en tres capas: "),n(72,"strong"),e(73,"core/"),t(),e(74," para servicios singleton, guards e interceptors; "),n(75,"strong"),e(76,"shared/"),t(),e(77," para componentes, pipes y directivas reutilizables; y "),n(78,"strong"),e(79,"features/"),t(),e(80," con un m\xF3dulo por dominio. Cada capa expone un "),n(81,"code"),e(82,"index.ts"),t(),e(83," barrel export para imports limpios. "),t(),n(84,"pre")(85,"code"),e(86,`src/app/
\u251C\u2500\u2500 core/
\u2502   \u251C\u2500\u2500 services/
\u2502   \u2502   \u251C\u2500\u2500 auth.service.ts
\u2502   \u2502   \u2514\u2500\u2500 api.service.ts
\u2502   \u251C\u2500\u2500 guards/
\u2502   \u2502   \u2514\u2500\u2500 auth.guard.ts
\u2502   \u251C\u2500\u2500 interceptors/
\u2502   \u2502   \u2514\u2500\u2500 token.interceptor.ts
\u2502   \u2514\u2500\u2500 index.ts
\u251C\u2500\u2500 shared/
\u2502   \u251C\u2500\u2500 components/
\u2502   \u2502   \u2514\u2500\u2500 button/button.ts
\u2502   \u251C\u2500\u2500 pipes/
\u2502   \u2502   \u2514\u2500\u2500 currency-format.ts
\u2502   \u251C\u2500\u2500 directives/
\u2502   \u2502   \u2514\u2500\u2500 tooltip.ts
\u2502   \u2514\u2500\u2500 index.ts
\u251C\u2500\u2500 features/
\u2502   \u251C\u2500\u2500 users/
\u2502   \u2502   \u251C\u2500\u2500 user-list.ts
\u2502   \u2502   \u251C\u2500\u2500 user-detail.ts
\u2502   \u2502   \u2514\u2500\u2500 users.routes.ts
\u2502   \u2514\u2500\u2500 products/
\u2502       \u251C\u2500\u2500 product-list.ts
\u2502       \u2514\u2500\u2500 products.routes.ts
\u2514\u2500\u2500 app.routes.ts`),t()(),n(87,"div",2),e(88," \u{1F4C2} Estructura actual del proyecto: "),n(89,"ul")(90,"li")(91,"code"),e(92,"core/"),t(),e(93," \u2014 Servicios singleton, interceptors, guards"),t(),n(94,"li")(95,"code"),e(96,"shared/"),t(),e(97," \u2014 Componentes, directivas, modelos reutilizables"),t(),n(98,"li")(99,"code"),e(100,"features/"),t(),e(101," \u2014 M\xF3dulos por dominio (ngrx-lab, rxjs-lab, etc.)"),t()()()(),n(102,"div",5)(103,"h3"),e(104,"4 \xB7 SCAM \u2192 Standalone"),t(),n(105,"p"),e(106," El patr\xF3n "),n(107,"strong"),e(108,"SCAM"),t(),e(109," (Single Component Angular Module) envolv\xEDa cada componente en su propio NgModule. Con "),n(110,"strong"),e(111,"standalone components"),t(),e(112," de Angular 14+ ya no se necesita esa capa extra: el componente declara sus propios imports directamente. "),t(),n(113,"pre")(114,"code"),e(115,`// \u2500\u2500\u2500 Antes: SCAM \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
@NgModule({
  declarations: [UserCardComponent],
  imports: [AutoGlossaryDirective, CommonModule],
  exports: [UserCardComponent]
})
export class UserCardModule {}

// \u2500\u2500\u2500 Despu\xE9s: Standalone \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
@Component({
  standalone: true,
  imports: [AutoGlossaryDirective, NgIf, NgFor],
  selector: 'app-user-card',
  template: \\\`...\\\`
})
export class UserCardComponent {}`),t()(),n(116,"div",2),e(117," \u{1F4C2} Todos los componentes del proyecto son Standalone (Angular 20.3 default) "),t()(),n(118,"div",6)(119,"h3"),e(120,"5 \xB7 Barrel Exports"),t(),n(121,"p"),e(122," Los archivos "),n(123,"code"),e(124,"index.ts"),t(),e(125," re-exportan los s\xEDmbolos p\xFAblicos de una carpeta, simplificando las rutas de importaci\xF3n y creando una API p\xFAblica clara para cada capa del proyecto. "),t(),n(126,"pre")(127,"code"),e(128,`// shared/index.ts
export * from './components/button/button';
export * from './pipes/currency-format';
export * from './directives/tooltip';

// Consumo limpio desde cualquier feature:
import {
  ButtonComponent,
  CurrencyFormatPipe,
  TooltipDirective
} from '../../shared';`),t()()(),n(129,"div",7)(130,"h3"),e(131,"6 \xB7 Arquitectura de una app Angular Enterprise"),t(),n(132,"p"),e(133," En aplicaciones grandes, la arquitectura define la mantenibilidad a largo plazo. La clave es separar responsabilidades en capas con reglas de dependencia estrictas. "),t(),n(134,"h4"),e(135,"Estructura de carpetas recomendada"),t(),n(136,"pre"),i(),n(137,"code"),e(138,`src/app/
\u251C\u2500\u2500 core/                    # Singleton services, guards, interceptors
\u2502   \u251C\u2500\u2500 services/            # API services, auth, config
\u2502   \u2502   \u251C\u2500\u2500 auth.service.ts
\u2502   \u2502   \u251C\u2500\u2500 api.service.ts
\u2502   \u2502   \u2514\u2500\u2500 config.service.ts
\u2502   \u251C\u2500\u2500 interceptors/        # HTTP interceptors
\u2502   \u2502   \u251C\u2500\u2500 auth.interceptor.ts
\u2502   \u2502   \u2514\u2500\u2500 error.interceptor.ts
\u2502   \u251C\u2500\u2500 guards/              # Route guards
\u2502   \u2502   \u2514\u2500\u2500 auth.guard.ts
\u2502   \u251C\u2500\u2500 models/              # Core domain models
\u2502   \u2502   \u2514\u2500\u2500 user.model.ts
\u2502   \u2514\u2500\u2500 index.ts             # Barrel export
\u251C\u2500\u2500 shared/                  # Reusable, stateless
\u2502   \u251C\u2500\u2500 components/          # Dumb/presentational components
\u2502   \u2502   \u251C\u2500\u2500 button/
\u2502   \u2502   \u251C\u2500\u2500 card/
\u2502   \u2502   \u2514\u2500\u2500 modal/
\u2502   \u251C\u2500\u2500 directives/          # Custom directives
\u2502   \u2502   \u2514\u2500\u2500 tooltip.directive.ts
\u2502   \u251C\u2500\u2500 pipes/               # Custom pipes
\u2502   \u2502   \u2514\u2500\u2500 currency-format.pipe.ts
\u2502   \u251C\u2500\u2500 utils/               # Pure utility functions
\u2502   \u2502   \u2514\u2500\u2500 date-helpers.ts
\u2502   \u2514\u2500\u2500 index.ts             # Barrel export
\u251C\u2500\u2500 features/                # Feature modules (lazy-loaded)
\u2502   \u251C\u2500\u2500 products/
\u2502   \u2502   \u251C\u2500\u2500 components/      # Feature-specific components
\u2502   \u2502   \u2502   \u251C\u2500\u2500 product-list.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 product-detail.ts
\u2502   \u2502   \u251C\u2500\u2500 services/        # Feature-specific services
\u2502   \u2502   \u2502   \u2514\u2500\u2500 product.service.ts
\u2502   \u2502   \u251C\u2500\u2500 store/           # NgRx state (if needed)
\u2502   \u2502   \u2502   \u251C\u2500\u2500 product.actions.ts
\u2502   \u2502   \u2502   \u251C\u2500\u2500 product.reducer.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 product.selectors.ts
\u2502   \u2502   \u2514\u2500\u2500 products.routes.ts
\u2502   \u2514\u2500\u2500 users/
\u2502       \u251C\u2500\u2500 components/
\u2502       \u251C\u2500\u2500 services/
\u2502       \u2514\u2500\u2500 users.routes.ts
\u2514\u2500\u2500 app.routes.ts`),t(),o(),t(),n(139,"h4"),e(140,"Reglas de dependencia"),t(),n(141,"ul")(142,"li")(143,"code"),e(144,"core/"),t(),e(145," \u2192 importa de "),n(146,"code"),e(147,"shared/"),t(),e(148,", "),n(149,"strong"),e(150,"nunca"),t(),e(151," de "),n(152,"code"),e(153,"features/"),t(),e(154,"."),t(),n(155,"li")(156,"code"),e(157,"shared/"),t(),e(158," \u2192 "),n(159,"strong"),e(160,"NO"),t(),e(161," importa de "),n(162,"code"),e(163,"core/"),t(),e(164," ni de "),n(165,"code"),e(166,"features/"),t(),e(167,". Es 100 % aut\xF3noma."),t(),n(168,"li")(169,"code"),e(170,"features/"),t(),e(171," \u2192 importa de "),n(172,"code"),e(173,"core/"),t(),e(174," y "),n(175,"code"),e(176,"shared/"),t(),e(177,", "),n(178,"strong"),e(179,"nunca"),t(),e(180," de otros features."),t(),n(181,"li")(182,"strong"),e(183,"Si dos features necesitan comunicarse"),t(),e(184," \u2192 usan un servicio de "),n(185,"code"),e(186,"core/"),t(),e(187," o un Store global (NgRx)."),t()(),n(188,"pre"),i(),n(189,"code"),e(190,`// \u274C MAL \u2014 feature importa directamente de otro feature
import { ProductService } from '../products/services/product.service';

// \u2705 BIEN \u2014 servicio compartido vive en core/
import { CatalogService } from '../../core/services/catalog.service';

// \u2705 BIEN \u2014 comunicaci\xF3n via Store global
import { selectCartItems } from '../../core/store/cart.selectors';`),t(),o(),t(),n(191,"h4"),e(192,"Barrel exports (index.ts)"),t(),n(193,"p"),e(194," Cada capa expone un "),n(195,"code"),e(196,"index.ts"),t(),e(197," que re-exporta solo la API p\xFAblica. Esto simplifica imports y crea un contrato claro entre capas. "),t(),n(198,"pre"),i(),n(199,"code"),e(200,`// shared/components/index.ts
export { ButtonComponent } from './button/button.component';
export { CardComponent } from './card/card.component';
export { ModalComponent } from './modal/modal.component';

// core/index.ts
export { AuthService } from './services/auth.service';
export { ApiService } from './services/api.service';
export { AuthGuard } from './guards/auth.guard';

// En un feature:
import { ButtonComponent, CardComponent } from '@shared/components';
import { AuthService } from '@core';`),t(),o(),t(),n(201,"p"),e(202," Tip: configura "),n(203,"code"),e(204,"paths"),t(),e(205," en "),n(206,"code"),e(207,"tsconfig.json"),t(),e(208," para alias como "),n(209,"code"),e(210,"@core"),t(),e(211,", "),n(212,"code"),e(213,"@shared"),t(),e(214,", "),n(215,"code"),e(216,"@features"),t(),e(217,". "),t(),n(218,"pre"),i(),n(219,"code"),e(220,`// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@core/*": ["src/app/core/*"],
      "@shared/*": ["src/app/shared/*"],
      "@features/*": ["src/app/features/*"]
    }
  }
}`),t(),o(),t(),n(221,"div",2),e(222," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(223,"ul")(224,"li")(225,"code"),e(226,"core/"),t(),e(227," \u2014 Servicios singleton, interceptors, guards"),t(),n(228,"li")(229,"code"),e(230,"shared/"),t(),e(231," \u2014 Componentes, directivas, modelos reutilizables"),t(),n(232,"li")(233,"code"),e(234,"features/"),t(),e(235," \u2014 M\xF3dulos por dominio lazy-loaded (ngrx-lab, rxjs-lab, etc.)"),t()()()(),n(236,"div",8)(237,"h3"),e(238,"7 \xB7 Patrones de comunicaci\xF3n entre componentes"),t(),n(239,"p"),e(240," Angular ofrece 6 mecanismos de comunicaci\xF3n. Elegir el correcto depende de la relaci\xF3n entre componentes y la complejidad del estado compartido. "),t(),n(241,"h4"),e(242,"1. @Input / @Output \u2014 Padre \u2194 Hijo directo"),t(),n(243,"p"),e(244," El mecanismo m\xE1s simple y expl\xEDcito. Limitado a la jerarqu\xEDa directa padre-hijo. Ideal para componentes presentacionales. "),t(),n(245,"pre"),i(),n(246,"code"),e(247,`// Padre env\xEDa datos al hijo con @Input
// Hijo notifica al padre con @Output
@Component({
  selector: 'app-parent',
  template: \\\`
    <app-child
      [item]="selectedItem"
      (save)="onSave($event)" />
  \\\`
})
export class ParentComponent {
  selectedItem = signal({ id: 1, name: 'Angular' });

  onSave(updated: Item) {
    this.selectedItem.set(updated);
  }
}

@Component({
  selector: 'app-child',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() item!: Item;
  @Output() save = new EventEmitter<Item>();

  onSubmit() {
    this.save.emit({ ...this.item, name: 'Updated' });
  }
}`),t(),o(),t(),n(248,"h4"),e(249,"2. Shared Service + BehaviorSubject \u2014 Sin relaci\xF3n directa"),t(),n(250,"p"),e(251," Un servicio inyectable act\xFAa como mediador entre componentes que no tienen relaci\xF3n padre-hijo. Usa "),n(252,"code"),e(253,"BehaviorSubject"),t(),e(254," para mantener y emitir el \xFAltimo valor. "),t(),n(255,"pre"),i(),n(256,"code"),e(257,`@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<string[]>([]);
  notifications$ = this.notificationsSubject.asObservable();

  add(message: string) {
    const current = this.notificationsSubject.value;
    this.notificationsSubject.next([...current, message]);
  }

  clear() {
    this.notificationsSubject.next([]);
  }
}

// Componente A \u2014 agrega notificaciones
@Component({ ... })
export class OrderComponent {
  private notif = inject(NotificationService);

  placeOrder() {
    this.notif.add('Pedido creado exitosamente');
  }
}

// Componente B \u2014 muestra notificaciones
@Component({
  template: \\\`
    @for (msg of notifications$ | async; track msg) {
      <div class="toast">{{ msg }}</div>
    }
  \\\`
})
export class ToastComponent {
  notifications$ = inject(NotificationService).notifications$;
}`),t(),o(),t(),n(258,"h4"),e(259,"3. Signals (Angular 17+) \u2014 Reactivo y s\xEDncrono"),t(),n(260,"p"),e(261," Un signal en un servicio es la alternativa moderna a "),n(262,"code"),e(263,"BehaviorSubject"),t(),e(264,". M\xE1s simple, s\xEDncrono y con mejor integraci\xF3n con el template. "),t(),n(265,"pre"),i(),n(266,"code"),e(267,`@Injectable({ providedIn: 'root' })
export class CartService {
  items = signal<CartItem[]>([]);
  total = computed(() =>
    this.items().reduce((sum, i) => sum + i.price * i.qty, 0)
  );

  addItem(item: CartItem) {
    this.items.update(list => [...list, item]);
  }

  removeItem(id: number) {
    this.items.update(list => list.filter(i => i.id !== id));
  }
}

// Cualquier componente lo consume directamente
@Component({
  template: \\\`
    <span class="badge">{{ cart.items().length }}</span>
    <span>Total: {{ cart.total() | currency }}</span>
  \\\`
})
export class NavbarComponent {
  cart = inject(CartService);
}`),t(),o(),t(),n(268,"h4"),e(269,"4. NgRx Store \u2014 Estado global predecible"),t(),n(270,"p"),e(271," Para apps complejas con muchos consumidores del mismo estado. Patr\xF3n Redux: Actions \u2192 Reducers \u2192 Selectors \u2192 Effects. "),t(),n(272,"pre"),i(),n(273,"code"),e(274,`// Actions
export const loadProducts = createAction('[Products] Load');
export const loadProductsSuccess = createAction(
  '[Products] Load Success',
  props<{ products: Product[] }>()
);

// Reducer
export const productsReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({
    ...state, products, loading: false
  }))
);

// Selector
export const selectAllProducts = createSelector(
  selectProductsState,
  state => state.products
);

// Componente consume con Store
@Component({ ... })
export class ProductListComponent {
  private store = inject(Store);
  products = toSignal(this.store.select(selectAllProducts));

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }
}`),t(),o(),t(),n(275,"h4"),e(276,"5. @ViewChild / @ContentChild \u2014 Acceso directo al hijo"),t(),n(277,"p"),e(278," El padre accede a propiedades y m\xE9todos p\xFAblicos del hijo. Acoplamiento alto, usar con precauci\xF3n y solo cuando sea necesario (ej: controlar un reproductor de video). "),t(),n(279,"pre"),i(),n(280,"code"),e(281,`@Component({
  template: \\\`
    <app-video-player #player />
    <button (click)="player.play()">Play</button>
    <button (click)="player.pause()">Pause</button>
  \\\`
})
export class VideoPageComponent {
  @ViewChild('player') player!: VideoPlayerComponent;

  seekTo(seconds: number) {
    this.player.seek(seconds);
  }
}`),t(),o(),t(),n(282,"h4"),e(283,"6. Event Bus (no recomendado)"),t(),n(284,"p"),e(285," Un "),n(286,"code"),e(287,"Subject"),t(),e(288," como bus global de eventos. Es un "),n(289,"strong"),e(290,"anti-pattern"),t(),e(291," en Angular porque es dif\xEDcil de rastrear, depurar y tipar. Usa NgRx Store en su lugar. "),t(),n(292,"pre"),i(),n(293,"code"),e(294,`// \u274C Anti-pattern \u2014 dif\xEDcil de rastrear y depurar
@Injectable({ providedIn: 'root' })
export class EventBus {
  private bus = new Subject<{ type: string; payload: any }>();

  emit(type: string, payload: any) {
    this.bus.next({ type, payload });
  }

  on(type: string) {
    return this.bus.pipe(filter(e => e.type === type));
  }
}

// \u2705 Mejor alternativa: NgRx Store o un servicio tipado con signals`),t(),o(),t(),n(295,"h4"),e(296,"Tabla de decisi\xF3n"),t(),n(297,"table")(298,"thead")(299,"tr")(300,"th"),e(301,"Escenario"),t(),n(302,"th"),e(303,"Patr\xF3n recomendado"),t()()(),n(304,"tbody")(305,"tr")(306,"td"),e(307,"Padre \u2192 Hijo"),t(),n(308,"td"),e(309,"@Input"),t()(),n(310,"tr")(311,"td"),e(312,"Hijo \u2192 Padre"),t(),n(313,"td"),e(314,"@Output"),t()(),n(315,"tr")(316,"td"),e(317,"Hermanos cercanos"),t(),n(318,"td"),e(319,"Shared Service o Signal"),t()(),n(320,"tr")(321,"td"),e(322,"Cross-feature"),t(),n(323,"td"),e(324,"NgRx Store"),t()(),n(325,"tr")(326,"td"),e(327,"Estado de UI local"),t(),n(328,"td"),e(329,"Signal en componente"),t()(),n(330,"tr")(331,"td"),e(332,"Estado global (auth, config)"),t(),n(333,"td"),e(334,"Service con signal o NgRx"),t()()()(),n(335,"div",2),e(336," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(337,"ul")(338,"li")(339,"code"),e(340,"features/architecture-lab/architecture-lab.ts"),t(),e(341," \u2014 @Input/@Output, servicios compartidos, signals"),t(),n(342,"li")(343,"code"),e(344,"features/ngrx-lab/"),t(),e(345," \u2014 NgRx Store completo (actions, reducer, selectors, effects)"),t()()()(),n(346,"div",9)(347,"h3"),e(348,"8 \xB7 State Management \u2014 Cu\xE1ndo usar qu\xE9"),t(),n(349,"p"),e(350," Elegir la herramienta de estado correcta evita sobre-ingenier\xEDa en apps simples y caos en apps complejas. Sigue este \xE1rbol de decisi\xF3n: "),t(),n(351,"h4"),e(352,"1. Estado local del componente \u2192 "),n(353,"code"),e(354,"signal()"),t(),e(355," o propiedad"),t(),n(356,"p"),e(357," Contadores, toggles, estado de formulario, visibilidad de UI. No necesita salir del componente. "),t(),n(358,"pre"),i(),n(359,"code"),e(360,`@Component({
  template: \\\`
    <button (click)="showPanel.set(!showPanel())">
      {{ showPanel() ? 'Ocultar' : 'Mostrar' }}
    </button>
    @if (showPanel()) {
      <div class="panel">Contenido</div>
    }
  \\\`
})
export class TogglePanelComponent {
  showPanel = signal(false);
}`),t(),o(),t(),n(361,"h4"),e(362,"2. Compartido entre pocos componentes \u2192 Service + "),n(363,"code"),e(364,"signal()"),t(),e(365," o "),n(366,"code"),e(367,"BehaviorSubject"),t()(),n(368,"p"),e(369," Tema oscuro/claro, estado del sidebar, preferencias de usuario. Un servicio singleton con signal es la soluci\xF3n m\xE1s simple. "),t(),n(370,"pre"),i(),n(371,"code"),e(372,`@Injectable({ providedIn: 'root' })
export class SidebarService {
  isOpen = signal(true);

  toggle() {
    this.isOpen.update(v => !v);
  }
}

// Header component
@Component({
  template: \\\`<button (click)="sidebar.toggle()">\u2630</button>\\\`
})
export class HeaderComponent {
  sidebar = inject(SidebarService);
}

// Layout component
@Component({
  template: \\\`
    <aside [class.open]="sidebar.isOpen()">...</aside>
  \\\`
})
export class LayoutComponent {
  sidebar = inject(SidebarService);
}`),t(),o(),t(),n(373,"h4"),e(374,"3. Estado complejo de feature \u2192 NgRx ComponentStore o SignalStore"),t(),n(375,"p"),e(376," CRUD de una feature, estado de formulario complejo, filtros + paginaci\xF3n. El estado es m\xE1s complejo que un solo signal pero no necesita ser global. "),t(),n(377,"pre"),i(),n(378,"code"),e(379,`// NgRx SignalStore \u2014 alternativa moderna a ComponentStore
import { signalStore, withState, withComputed, withMethods, patchState }
  from '@ngrx/signals';

interface ProductState {
  products: Product[];
  loading: boolean;
  filter: string;
}

export const ProductStore = signalStore(
  withState<ProductState>({
    products: [],
    loading: false,
    filter: ''
  }),
  withComputed(({ products, filter }) => ({
    filteredProducts: computed(() => {
      const f = filter().toLowerCase();
      return f
        ? products().filter(p => p.name.toLowerCase().includes(f))
        : products();
    }),
    count: computed(() => products().length)
  })),
  withMethods((store, api = inject(ProductApiService)) => ({
    async loadProducts() {
      patchState(store, { loading: true });
      const products = await firstValueFrom(api.getAll());
      patchState(store, { products, loading: false });
    },
    setFilter(filter: string) {
      patchState(store, { filter });
    },
    removeProduct(id: number) {
      patchState(store, {
        products: store.products().filter(p => p.id !== id)
      });
    }
  }))
);

// Uso en componente \u2014 proveer a nivel de feature
@Component({
  providers: [ProductStore],
  template: \\\`
    <input (input)="store.setFilter($event.target.value)" />
    <p>{{ store.count() }} productos</p>
    @if (store.loading()) {
      <app-spinner />
    }
    @for (p of store.filteredProducts(); track p.id) {
      <app-product-card [product]="p" />
    }
  \\\`
})
export class ProductListComponent {
  store = inject(ProductStore);

  constructor() {
    this.store.loadProducts();
  }
}`),t(),o(),t(),n(380,"h4"),e(381,"4. Estado global de la app \u2192 NgRx Store"),t(),n(382,"p"),e(383," Auth, carrito de compras, datos compartidos entre features. Necesario cuando requieres: time-travel debugging, logging, hydration SSR, o m\xFAltiples features consumen el mismo estado. "),t(),n(384,"pre"),i(),n(385,"code"),e(386,`// Estructura NgRx completa para auth global
// auth.actions.ts
export const login = createAction('[Auth] Login', props<{ credentials: Credentials }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ user: User }>());
export const logout = createAction('[Auth] Logout');

// auth.reducer.ts
export const authReducer = createReducer(
  { user: null, isAuthenticated: false },
  on(loginSuccess, (state, { user }) => ({
    ...state, user, isAuthenticated: true
  })),
  on(logout, () => ({ user: null, isAuthenticated: false }))
);

// auth.selectors.ts
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  state => state.isAuthenticated
);

// auth.effects.ts
loginEffect = createEffect(() =>
  this.actions$.pipe(
    ofType(login),
    exhaustMap(action =>
      this.authApi.login(action.credentials).pipe(
        map(user => loginSuccess({ user })),
        catchError(() => of(loginFailure()))
      )
    )
  )
);`),t(),o(),t(),n(387,"h4"),e(388,"\xC1rbol de decisi\xF3n r\xE1pido"),t(),n(389,"table")(390,"thead")(391,"tr")(392,"th"),e(393,"Pregunta"),t(),n(394,"th"),e(395,"Si s\xED"),t(),n(396,"th"),e(397,"Si no"),t()()(),n(398,"tbody")(399,"tr")(400,"td"),e(401,"\xBFEl estado sale del componente?"),t(),n(402,"td"),e(403,"\u2192 Siguiente pregunta"),t(),n(404,"td")(405,"code"),e(406,"signal()"),t()()(),n(407,"tr")(408,"td"),e(409,"\xBFLo usan m\xE1s de 2-3 componentes?"),t(),n(410,"td"),e(411,"\u2192 Siguiente pregunta"),t(),n(412,"td"),e(413,"Service + signal"),t()(),n(414,"tr")(415,"td"),e(416,"\xBFEs cross-feature o necesita DevTools?"),t(),n(417,"td"),e(418,"NgRx Store"),t(),n(419,"td"),e(420,"SignalStore"),t()()()(),n(421,"div",2),e(422," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(423,"ul")(424,"li")(425,"code"),e(426,"features/ngrx-lab/store/"),t(),e(427," \u2014 NgRx Store completo (actions, reducer, selectors, effects)"),t(),n(428,"li")(429,"code"),e(430,"features/architecture-lab/architecture-lab.ts"),t(),e(431," \u2014 Service con signal, @Input/@Output"),t(),n(432,"li")(433,"code"),e(434,"features/signals-lab/"),t(),e(435," \u2014 Signals como estado local y compartido"),t()()()()())},styles:["[_nghost-%COMP%]{display:block;padding:1rem 0}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.2rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .6rem;font-size:1.1rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:6px;padding:.8rem;overflow-x:auto;font-size:.85rem;line-height:1.5}code[_ngcontent-%COMP%]{color:var(--text)}"]})};export{u as ArchLearnComponent};
