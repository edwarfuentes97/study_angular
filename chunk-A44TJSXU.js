import{a as o}from"./chunk-WXOJIICE.js";import"./chunk-BKIDS2JO.js";import{Db as n,Eb as t,Zb as e,fb as r}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var l=class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=r({type:a,selectors:[["app-testing-learn"]],decls:1274,vars:0,consts:[["appAutoGlossary","",1,"cards"],["id","0-piramide-de-testing",1,"card"],["id","1-testbed-amp-componentfixture",1,"card"],[1,"code-ref"],["id","2-fakeasync-amp-tick",1,"card"],["id","3-jasmine-spies",1,"card"],["id","4-mockstore-ngrx",1,"card"],["id","5-httptestingcontroller",1,"card"],["id","6-marble-testing",1,"card"],["id","7-testing-de-componentes-con-signals-e-inputs",1,"card"],["id","8-testing-de-servicios",1,"card"],["id","9-mocking-de-dependencias",1,"card"],["id","10-testing-de-ngrx-reducers-selectors-y-effects",1,"card"],["id","11-testing-de-pipes-y-directivas",1,"card"],["id","12-testing-de-formularios-reactivos",1,"card"],["id","13-coverage-y-umbrales",1,"card"],["id","14-buenas-practicas-de-testing",1,"card"]],template:function(i,d){i&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),e(3,"0. Pir\xE1mide de Testing"),t(),n(4,"p"),e(5," La pir\xE1mide de testing describe c\xF3mo distribuir el esfuerzo: muchos tests unitarios (r\xE1pidos, baratos, aislados), una capa media de tests de integraci\xF3n y pocos tests E2E (lentos, fr\xE1giles, pero los m\xE1s cercanos al usuario real). En Angular cada nivel tiene herramientas y objetivos distintos. "),t(),n(6,"pre")(7,"code"),e(8,`        /\\
       /E2E\\        ~10% \u2014 Playwright / Cypress
      /-----\\       Flujos completos de usuario contra la app real
     / Integ.\\      ~20% \u2014 TestBed + template + DI
    /---------\\     Componente + template + servicios reales o parciales
   /   Unit    \\    ~70% \u2014 Jasmine puro, sin DOM
  /-------------\\   Pipes, reducers, selectors, validators, l\xF3gica de servicios`),t()(),n(9,"p")(10,"strong"),e(11,"Qu\xE9 testear en cada nivel:"),t()(),n(12,"ul")(13,"li")(14,"strong"),e(15,"Unit:"),t(),e(16," funciones puras (reducers NgRx, selectors, pipes, validators), l\xF3gica de servicios con dependencias mockeadas. Sin DOM ni TestBed cuando sea posible."),t(),n(17,"li")(18,"strong"),e(19,"Integraci\xF3n:"),t(),e(20," componente + su template (render condicional, bindings, eventos), interacci\xF3n componente \u2194 servicio, formularios reactivos con el DOM."),t(),n(21,"li")(22,"strong"),e(23,"E2E:"),t(),e(24," los happy paths cr\xEDticos del negocio (login, checkout, CRUD principal). No dupliques aqu\xED lo que ya cubren los tests unitarios."),t()(),n(25,"p"),e(26," Variante moderna: el "),n(27,"em"),e(28,"testing trophy"),t(),e(29," prioriza tests de integraci\xF3n porque dan m\xE1s confianza por l\xEDnea de test. En Angular esto significa preferir tests con TestBed que ejercitan el template sobre tests que solo llaman m\xE9todos de la clase. "),t(),n(30,"h4"),e(31,"\u26A0\uFE0F Errores comunes"),t(),n(32,"ul")(33,"li"),e(34,"Invertir la pir\xE1mide: cientos de tests E2E lentos y casi ning\xFAn unitario \u2192 suite fr\xE1gil que nadie mantiene."),t(),n(35,"li"),e(36,"Testear la misma l\xF3gica en los tres niveles: duplicaci\xF3n sin ganancia de confianza."),t(),n(37,"li"),e(38,"Medir calidad solo por cantidad de tests en vez de por comportamiento cubierto."),t()(),n(39,"h4"),e(40,"\u{1F3A4} Preguntas de entrevista"),t(),n(41,"ul")(42,"li")(43,"strong"),e(44,"\xBFPor qu\xE9 la base de la pir\xE1mide son los tests unitarios?"),t(),e(45," \u2014 Porque son r\xE1pidos, deterministas y baratos de mantener; permiten feedback inmediato y localizan fallos con precisi\xF3n."),t(),n(46,"li")(47,"strong"),e(48,"\xBFCu\xE1ndo elegir\xEDas un test de integraci\xF3n sobre uno unitario?"),t(),e(49," \u2014 Cuando el valor est\xE1 en la colaboraci\xF3n entre piezas (componente + template + DI), no en una funci\xF3n aislada."),t(),n(50,"li")(51,"strong"),e(52,"\xBFQu\xE9 NO deber\xEDas testear con E2E?"),t(),e(53," \u2014 Casos borde y combinaciones exhaustivas; eso pertenece al nivel unitario. E2E cubre flujos cr\xEDticos de usuario."),t()()(),n(54,"div",2)(55,"h3"),e(56,"1. TestBed & ComponentFixture"),t(),n(57,"p"),e(58," TestBed es el entorno de testing de Angular: crea un m\xF3dulo de prueba din\xE1mico donde declaras imports y providers, y del que obtienes componentes reales renderizados. "),n(59,"code"),e(60,"ComponentFixture"),t(),e(61,' es el "mango" del componente: da acceso a la instancia ('),n(62,"code"),e(63,"componentInstance"),t(),e(64,"), al DOM ("),n(65,"code"),e(66,"nativeElement"),t(),e(67,"), al \xE1rbol de debug ("),n(68,"code"),e(69,"debugElement"),t(),e(70,") y al ciclo de change detection ("),n(71,"code"),e(72,"detectChanges()"),t(),e(73,"). "),t(),n(74,"pre")(75,"code"),e(76,`describe('MyComponent', () => {
  let fixture: ComponentFixture<MyComponent>;
  let component: MyComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent],          // standalone: se importa, no se declara
      providers: [{ provide: ApiService, useValue: apiSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();           // primer render (ngOnInit + bindings)
  });

  it('should render title', () => {
    const el = fixture.nativeElement.querySelector('h1');
    expect(el.textContent).toContain('Mi T\xEDtulo');
  });
});`),t()(),n(77,"h4"),e(78,"detectChanges vs autoDetectChanges"),t(),n(79,"p"),e(80," En tests, la change detection NO corre sola: cada vez que cambias estado debes llamar "),n(81,"code"),e(82,"fixture.detectChanges()"),t(),e(83," para sincronizar el DOM. Con "),n(84,"code"),e(85,"fixture.autoDetectChanges()"),t(),e(86," Angular detecta cambios autom\xE1ticamente tras eventos y microtareas (\xFAtil en tests con signals y zoneless), a costa de menos control sobre cu\xE1ndo se renderiza. "),t(),n(87,"h4"),e(88,"DebugElement vs nativeElement + By.css"),t(),n(89,"p")(90,"code"),e(91,"nativeElement"),t(),e(92," es el DOM real (HTMLElement): \xFAsalo para leer texto y atributos. "),n(93,"code"),e(94,"debugElement"),t(),e(95," es la abstracci\xF3n de Angular: permite consultar con "),n(96,"code"),e(97,"By.css()"),t(),e(98," / "),n(99,"code"),e(100,"By.directive()"),t(),e(101,", acceder al injector local y disparar eventos sin DOM real con "),n(102,"code"),e(103,"triggerEventHandler"),t(),e(104,". "),t(),n(105,"pre")(106,"code"),e(107,`import { By } from '@angular/platform-browser';

// Consulta tipada por CSS
const btn = fixture.debugElement.query(By.css('[data-testid="increment-btn"]'));

// Dispara el (click) del template SIN necesitar un evento DOM real
btn.triggerEventHandler('click', null);
fixture.detectChanges();

// Consulta por directiva aplicada
const tooltip = fixture.debugElement.query(By.directive(TooltipDirective));

// Injector local del elemento: acceder a servicios provistos en el componente
const service = btn.injector.get(MyScopedService);`),t()(),n(108,"h4"),e(109,"\u26A0\uFE0F Errores comunes"),t(),n(110,"ul")(111,"li"),e(112,"Olvidar "),n(113,"code"),e(114,"fixture.detectChanges()"),t(),e(115,' tras cambiar estado \u2192 el DOM sigue mostrando el valor anterior y el test falla "misteriosamente".'),t(),n(116,"li"),e(117,"Llamar "),n(118,"code"),e(119,"detectChanges()"),t(),e(120," en el "),n(121,"code"),e(122,"beforeEach"),t(),e(123," y luego sorprenderse de que "),n(124,"code"),e(125,"ngOnInit"),t(),e(126," ya se ejecut\xF3 antes de configurar el spy del test."),t(),n(127,"li"),e(128,"Usar "),n(129,"code"),e(130,"nativeElement.click()"),t(),e(131," esperando que tambi\xE9n corra change detection: dispara el handler, pero el DOM no se actualiza hasta el pr\xF3ximo "),n(132,"code"),e(133,"detectChanges()"),t(),e(134,"."),t(),n(135,"li"),e(136,"Declarar el componente standalone en "),n(137,"code"),e(138,"declarations"),t(),e(139," en vez de "),n(140,"code"),e(141,"imports"),t(),e(142," \u2192 error de compilaci\xF3n del TestBed."),t()(),n(143,"h4"),e(144,"\u{1F3A4} Preguntas de entrevista"),t(),n(145,"ul")(146,"li")(147,"strong"),e(148,"\xBFQu\xE9 hace "),n(149,"code"),e(150,"compileComponents()"),t(),e(151,"?"),t(),e(152," \u2014 Compila templates y estilos externos de forma as\xEDncrona. Con el CLI (que precompila) suele ser opcional, pero es la convenci\xF3n segura."),t(),n(153,"li")(154,"strong"),e(155,"\xBFDiferencia entre "),n(156,"code"),e(157,"debugElement"),t(),e(158," y "),n(159,"code"),e(160,"nativeElement"),t(),e(161,"?"),t(),e(162," \u2014 nativeElement es el DOM crudo; debugElement envuelve el elemento con utilidades de Angular (query con predicados, injector, triggerEventHandler) y funciona incluso en renderers sin DOM."),t(),n(163,"li")(164,"strong"),e(165,"\xBFPor qu\xE9 la change detection no es autom\xE1tica en tests?"),t(),e(166," \u2014 Para que el test controle exactamente cu\xE1ndo se renderiza y pueda asertar estados intermedios (loading, error, etc.)."),t()(),n(167,"div",3),e(168," \u{1F4C2} "),n(169,"code"),e(170,"features/testing-lab/testing-demo.spec.ts"),t(),e(171," \u2014 TestBed.configureTestingModule con ComponentFixture "),t(),n(172,"div",3),e(173," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(174,"ul")(175,"li")(176,"code"),e(177,"features/testing-lab/testing-demo.spec.ts"),t(),e(178," \u2014 13 tests: render, clicks, async, mocking"),t(),n(179,"li")(180,"code"),e(181,"app.spec.ts"),t(),e(182," \u2014 Test b\xE1sico del componente ra\xEDz"),t()()()(),n(183,"div",4)(184,"h3"),e(185,"2. fakeAsync & tick"),t(),n(186,"p")(187,"code"),e(188,"fakeAsync"),t(),e(189," ejecuta el test dentro de una zona con tiempo virtual: los "),n(190,"code"),e(191,"setTimeout"),t(),e(192,", intervals y promesas no corren de verdad, sino que T\xDA avanzas el reloj. El test queda 100% s\xEDncrono y determinista \u2014 sin sleeps reales ni flakiness. "),t(),n(193,"pre")(194,"code"),e(195,`it('should show loading and then products after delay', fakeAsync(() => {
  mockApiService.getProducts.and.returnValue(of(mockProducts).pipe(delay(800)));

  component.loadProducts();
  expect(component.loading()).toBeTrue();   // estado intermedio asertable

  tick(800);                                // avanza 800ms virtuales
  expect(component.loading()).toBeFalse();
  expect(component.products()).toEqual(mockProducts);
}));`),t()(),n(196,"h4"),e(197,"La caja de herramientas async"),t(),n(198,"ul")(199,"li")(200,"code"),e(201,"tick(ms)"),t(),e(202," \u2014 avanza el reloj virtual exactamente "),n(203,"code"),e(204,"ms"),t(),e(205," milisegundos. Ejecuta timers vencidos y microtareas."),t(),n(206,"li")(207,"code"),e(208,"flush()"),t(),e(209," \u2014 avanza el reloj hasta vaciar TODOS los timers pendientes (\xFAtil cuando no conoces el delay exacto). Devuelve los ms avanzados."),t(),n(210,"li")(211,"code"),e(212,"flushMicrotasks()"),t(),e(213," \u2014 resuelve solo microtareas (Promises) sin avanzar timers."),t(),n(214,"li")(215,"code"),e(216,"discardPeriodicTasks()"),t(),e(217," \u2014 descarta intervals pendientes (ej. "),n(218,"code"),e(219,"setInterval"),t(),e(220,") para que el test no falle al salir de la zona."),t(),n(221,"li")(222,"code"),e(223,"waitForAsync"),t(),e(224," + "),n(225,"code"),e(226,"fixture.whenStable()"),t(),e(227," \u2014 espera as\xEDncrona REAL: el test espera a que la zona est\xE9 estable. Necesario cuando hay async que fakeAsync no puede controlar (ej. XHR real, APIs que usan tiempo nativo)."),t()(),n(228,"pre")(229,"code"),e(230,`// flush: no importa cu\xE1ntos timers anidados haya
it('completes all pending timers', fakeAsync(() => {
  component.startPolling();      // setTimeout dentro de setTimeout...
  flush();                       // vac\xEDa toda la cola de timers
  expect(component.done()).toBeTrue();
}));

// flushMicrotasks: solo Promises, el reloj no avanza
it('resolves promises without advancing timers', fakeAsync(() => {
  let value = 0;
  Promise.resolve(42).then(v => (value = v));
  flushMicrotasks();
  expect(value).toBe(42);
}));

// waitForAsync: async real, se usa con whenStable
it('waits for real async', waitForAsync(() => {
  fixture.whenStable().then(() => {
    fixture.detectChanges();
    expect(component.ready()).toBeTrue();
  });
}));`),t()(),n(231,"p")(232,"strong"),e(233,"Regla pr\xE1ctica:"),t(),e(234," usa "),n(235,"code"),e(236,"fakeAsync"),t(),e(237," por defecto (control total, test s\xEDncrono); "),n(238,"code"),e(239,"waitForAsync"),t(),e(240," solo cuando el c\xF3digo usa async que la zona fake no intercepta; y nunca mezcles ambos en el mismo test. "),t(),n(241,"h4"),e(242,"\u26A0\uFE0F Errores comunes"),t(),n(243,"ul")(244,"li"),e(245,"Error "),n(246,"code"),e(247,'"1 timer(s) still in the queue"'),t(),e(248," al terminar el test: qued\xF3 un timer sin consumir. Soluci\xF3n: "),n(249,"code"),e(250,"flush()"),t(),e(251," o "),n(252,"code"),e(253,"discardPeriodicTasks()"),t(),e(254," antes de salir."),t(),n(255,"li"),e(256,"Llamar "),n(257,"code"),e(258,"tick()"),t(),e(259," fuera de una zona "),n(260,"code"),e(261,"fakeAsync"),t(),e(262," \u2192 excepci\xF3n inmediata."),t(),n(263,"li"),e(264,"Usar "),n(265,"code"),e(266,"delay(0)"),t(),e(267," creyendo que es s\xEDncrono: sigue siendo un timer, necesita "),n(268,"code"),e(269,"tick(0)"),t(),e(270,"."),t(),n(271,"li"),e(272,"Hacer llamadas HTTP reales dentro de "),n(273,"code"),e(274,"fakeAsync"),t(),e(275,': XHR no es "patcheable" por la zona fake; mockea el servicio o usa HttpTestingController.'),t()(),n(276,"h4"),e(277,"\u{1F3A4} Preguntas de entrevista"),t(),n(278,"ul")(279,"li")(280,"strong"),e(281,"\xBFDiferencia entre "),n(282,"code"),e(283,"tick()"),t(),e(284," y "),n(285,"code"),e(286,"flush()"),t(),e(287,"?"),t(),e(288," \u2014 tick avanza una cantidad exacta de tiempo; flush avanza lo necesario hasta vaciar la cola de timers."),t(),n(289,"li")(290,"strong"),e(291,"\xBFCu\xE1ndo usar\xEDas "),n(292,"code"),e(293,"waitForAsync"),t(),e(294," en lugar de "),n(295,"code"),e(296,"fakeAsync"),t(),e(297,"?"),t(),e(298," \u2014 Cuando hay asincron\xEDa real que la zona fake no controla (compilaci\xF3n, APIs nativas, librer\xEDas con timers propios)."),t(),n(299,"li")(300,"strong"),e(301,"\xBFQu\xE9 son macrotareas y microtareas en este contexto?"),t(),e(302," \u2014 Macrotareas: setTimeout/setInterval (las avanza tick/flush). Microtareas: Promises (las resuelve flushMicrotasks o cualquier tick)."),t()(),n(303,"div",3),e(304," \u{1F4C2} "),n(305,"code"),e(306,"features/testing-lab/testing-demo.spec.ts"),t(),e(307,' \u2014 fakeAsync + tick para operaciones as\xEDncronas (tests "Async behavior with fakeAsync") '),t()(),n(308,"div",5)(309,"h3"),e(310,"3. Jasmine Spies"),t(),n(311,"p"),e(312," Los spies interceptan llamadas a funciones: registran cu\xE1ntas veces se llam\xF3, con qu\xE9 argumentos, y opcionalmente reemplazan la implementaci\xF3n. Son la base del mocking en Angular + Jasmine. "),t(),n(313,"h4"),e(314,"Crear spies"),t(),n(315,"pre")(316,"code"),e(317,`// 1) spyOn: esp\xEDa un m\xE9todo de un objeto EXISTENTE (lo reemplaza por defecto)
spyOn(service, 'getAll').and.returnValue(of(mockProducts));

// 2) createSpy: funci\xF3n suelta espiada
const callback = jasmine.createSpy('callback');

// 3) createSpyObj: objeto completo con m\xE9todos espiados \u2014 ideal para mocks de servicios
const apiSpy = jasmine.createSpyObj<MockApiService>('MockApiService',
  ['getProducts', 'getProduct', 'createProduct']);
apiSpy.getProducts.and.returnValue(of([]));  // tipado: SpyObj<T>`),t()(),n(318,"h4"),e(319,"Controlar el comportamiento (.and)"),t(),n(320,"pre")(321,"code"),e(322,`spy.and.returnValue(of(data));        // siempre devuelve lo mismo
spy.and.returnValues(1, 2, 3);        // valores distintos por llamada
spy.and.callFake((id) => of(db[id])); // l\xF3gica personalizada
spy.and.callThrough();                // esp\xEDa PERO ejecuta la impl. real
spy.and.throwError('boom');           // lanza excepci\xF3n
spy.and.resolveTo(data);              // para m\xE9todos que devuelven Promise
spy.and.stub();                       // vuelve al comportamiento por defecto (nada)`),t()(),n(323,"h4"),e(324,"Verificar llamadas (calls API)"),t(),n(325,"pre")(326,"code"),e(327,`expect(spy).toHaveBeenCalled();
expect(spy).toHaveBeenCalledTimes(2);
expect(spy).toHaveBeenCalledWith('42', jasmine.any(Object));
expect(spy).toHaveBeenCalledOnceWith('42');   // exactamente 1 vez y con esos args

spy.calls.count();                 // n\xFAmero de llamadas
spy.calls.mostRecent().args;       // args de la \xFAltima llamada
spy.calls.first().args;            // args de la primera
spy.calls.argsFor(1);              // args de la llamada n
spy.calls.allArgs();               // args de todas
spy.calls.reset();                 // limpia el historial (\xFAtil entre fases del test)`),t()(),n(328,"h4"),e(329,"Matchers \xFAtiles de Jasmine"),t(),n(330,"pre")(331,"code"),e(332,`expect(a).toBe(b);                 // igualdad por referencia (===)
expect(obj).toEqual({ id: 1 });    // igualdad estructural profunda
expect(list).toContain('item');
expect(fn).toThrowError(/not found/);
expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
expect(value).toBeNull();  expect(value).toBeUndefined();

// Matchers asim\xE9tricos: aserciones parciales
expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({ id: '1' }));
expect(result).toEqual(jasmine.arrayContaining([item1]));
expect(text).toEqual(jasmine.stringMatching(/^Error/));`),t()(),n(333,"h4"),e(334,"\u26A0\uFE0F Errores comunes"),t(),n(335,"ul")(336,"li"),e(337,"Olvidar que "),n(338,"code"),e(339,"spyOn"),t(),e(340," reemplaza la implementaci\xF3n: si necesitas la real, a\xF1ade "),n(341,"code"),e(342,".and.callThrough()"),t(),e(343,"."),t(),n(344,"li"),e(345,"Configurar el spy DESPU\xC9S de que el componente ya llam\xF3 al m\xE9todo (t\xEDpico con "),n(346,"code"),e(347,"ngOnInit"),t(),e(348," disparado por el "),n(349,"code"),e(350,"detectChanges()"),t(),e(351," del beforeEach)."),t(),n(352,"li"),e(353,"Usar "),n(354,"code"),e(355,"toBe"),t(),e(356," con objetos: compara referencias, no contenido. Para objetos usa "),n(357,"code"),e(358,"toEqual"),t(),e(359,"."),t(),n(360,"li"),e(361,"Un "),n(362,"code"),e(363,"createSpyObj"),t(),e(364," sin "),n(365,"code"),e(366,"returnValue"),t(),e(367," devuelve "),n(368,"code"),e(369,"undefined"),t(),e(370," \u2192 "),n(371,"code"),e(372,"undefined.subscribe is not a function"),t(),e(373,". Da siempre un valor por defecto."),t()(),n(374,"h4"),e(375,"\u{1F3A4} Preguntas de entrevista"),t(),n(376,"ul")(377,"li")(378,"strong"),e(379,"\xBFDiferencia entre "),n(380,"code"),e(381,"spyOn"),t(),e(382," y "),n(383,"code"),e(384,"createSpyObj"),t(),e(385,"?"),t(),e(386," \u2014 spyOn parchea un m\xE9todo de una instancia real existente; createSpyObj fabrica un doble completo sin implementaci\xF3n real, ideal para sustituir el servicio entero v\xEDa DI."),t(),n(387,"li")(388,"strong"),e(389,"\xBFQu\xE9 hace "),n(390,"code"),e(391,"callThrough"),t(),e(392,"?"),t(),e(393," \u2014 Registra la llamada pero delega en la implementaci\xF3n original: observas sin alterar el comportamiento."),t(),n(394,"li")(395,"strong"),e(396,"\xBFPara qu\xE9 sirven los matchers asim\xE9tricos?"),t(),e(397," \u2014 Para asertar solo la parte relevante de un argumento (ej. "),n(398,"code"),e(399,"objectContaining"),t(),e(400,") sin acoplar el test a todo el objeto."),t()(),n(401,"div",3),e(402," \u{1F4C2} "),n(403,"code"),e(404,"features/testing-lab/testing-demo.spec.ts"),t(),e(405," \u2014 createSpyObj tipado + and.returnValue + toHaveBeenCalledTimes "),t()(),n(406,"div",6)(407,"h3"),e(408,"4. MockStore (NgRx)"),t(),n(409,"p")(410,"code"),e(411,"provideMockStore"),t(),e(412," sustituye el Store real: los componentes reciben un store falso donde defines el estado y el valor de cada selector, sin reducers ni effects reales. As\xED el test del componente queda aislado de la l\xF3gica de NgRx. "),t(),n(413,"pre")(414,"code"),e(415,`import { MockStore, provideMockStore } from '@ngrx/store/testing';

let store: MockStore;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [ProductListComponent],
    providers: [
      provideMockStore({
        initialState: { products: { entities: {}, loading: false } },
        selectors: [
          { selector: selectAllProducts, value: mockProducts },
          { selector: selectLoading, value: false },
        ],
      }),
    ],
  });
  store = TestBed.inject(MockStore);
});`),t()(),n(416,"h4"),e(417,"Cambiar el estado durante el test"),t(),n(418,"pre")(419,"code"),e(420,`it('should show spinner while loading', () => {
  // 1) redefine el selector
  store.overrideSelector(selectLoading, true);
  // 2) fuerza a los subscribers a re-emitir
  store.refreshState();
  fixture.detectChanges();

  expect(fixture.nativeElement.querySelector('.spinner')).toBeTruthy();
});

it('should dispatch load action on init', () => {
  const dispatchSpy = spyOn(store, 'dispatch');
  component.ngOnInit();
  expect(dispatchSpy).toHaveBeenCalledWith(ProductActions.loadProducts());
});

afterEach(() => {
  store.resetSelectors();  // evita que overrides contaminen otros specs
});`),t()(),n(421,"p"),e(422," Tambi\xE9n existe "),n(423,"code"),e(424,"store.setState(nuevoEstado)"),t(),e(425," para reemplazar el estado completo \u2014 \xFAtil si el componente usa "),n(426,"code"),e(427,"store.select(fn)"),t(),e(428," con funciones en vez de selectors memoizados. "),t(),n(429,"h4"),e(430,"\u26A0\uFE0F Errores comunes"),t(),n(431,"ul")(432,"li"),e(433,"Llamar "),n(434,"code"),e(435,"overrideSelector"),t(),e(436," y olvidar "),n(437,"code"),e(438,"refreshState()"),t(),e(439,": los observables ya suscritos no re-emiten y el DOM no cambia."),t(),n(440,"li"),e(441,"No llamar "),n(442,"code"),e(443,"resetSelectors()"),t(),e(444," en "),n(445,"code"),e(446,"afterEach"),t(),e(447,": los selectors memoizados quedan sobreescritos y contaminan los siguientes tests del archivo."),t(),n(448,"li"),e(449,"Testear reducers o effects a trav\xE9s del MockStore: MockStore no los ejecuta; test\xE9alos por separado (ver card 10)."),t(),n(450,"li"),e(451,"Asertar el dispatch con un objeto literal en vez de la action creator: acopla el test al string del type."),t()(),n(452,"h4"),e(453,"\u{1F3A4} Preguntas de entrevista"),t(),n(454,"ul")(455,"li")(456,"strong"),e(457,"\xBFPor qu\xE9 usar MockStore en vez del Store real?"),t(),e(458," \u2014 A\xEDsla el componente: el test no depende de reducers/effects, defines directamente los datos que el componente ve, y no necesitas providers de toda la feature."),t(),n(459,"li")(460,"strong"),e(461,"\xBFQu\xE9 hace "),n(462,"code"),e(463,"overrideSelector"),t(),e(464," internamente?"),t(),e(465," \u2014 Sustituye el resultado memoizado del selector, por eso hace falta refreshState para propagar la nueva emisi\xF3n."),t(),n(466,"li")(467,"strong"),e(468,"\xBFC\xF3mo verificas que un componente despacha la acci\xF3n correcta?"),t(),e(469," \u2014 "),n(470,"code"),e(471,"spyOn(store, 'dispatch')"),t(),e(472," y asertar con "),n(473,"code"),e(474,"toHaveBeenCalledWith(actionCreator(props))"),t(),e(475,"."),t()(),n(476,"div",3),e(477," \u{1F4C2} Pendiente de implementar \u2014 consulta el ejercicio en la pesta\xF1a Lab \u{1F9EA} "),t()(),n(478,"div",7)(479,"h3"),e(480,"5. HttpTestingController"),t(),n(481,"p"),e(482," Permite testear servicios que usan "),n(483,"code"),e(484,"HttpClient"),t(),e(485,' sin servidor: cada request queda "en vuelo" hasta que el test la intercepta y responde. Controlas la respuesta, el status y los errores, y verificas que no queden requests inesperadas. '),t(),n(486,"pre")(487,"code"),e(488,`import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController }
  from '@angular/common/http/testing';

let service: ProductService;
let httpMock: HttpTestingController;

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [
      provideHttpClient(),         // el orden importa: primero el real...
      provideHttpClientTesting(),  // ...luego el testing backend que lo intercepta
      ProductService,
    ],
  });
  service = TestBed.inject(ProductService);
  httpMock = TestBed.inject(HttpTestingController);
});

afterEach(() => httpMock.verify());  // falla si quedaron requests sin responder

it('should fetch products', () => {
  let result: Product[] = [];
  service.getProducts().subscribe(p => (result = p));

  const req = httpMock.expectOne('/api/products');
  expect(req.request.method).toBe('GET');
  req.flush(mockProducts);           // responde la request pendiente

  expect(result.length).toBe(2);
});`),t()(),n(489,"h4"),e(490,"expectOne, match, flush con status, errores"),t(),n(491,"pre")(492,"code"),e(493,`// expectOne con predicado: m\xE9todo + URL + params
const req = httpMock.expectOne(
  r => r.method === 'POST' && r.url === '/api/products'
);
expect(req.request.body).toEqual(newProduct);
expect(req.request.headers.get('Authorization')).toBe('Bearer token');

// match: varias requests a la misma URL (expectOne fallar\xEDa)
const reqs = httpMock.match('/api/products');
expect(reqs.length).toBe(2);
reqs.forEach(r => r.flush([]));

// flush con status personalizado
req.flush({ message: 'Created' }, { status: 201, statusText: 'Created' });

// Error HTTP (el servidor respondi\xF3 con error)
req.flush('Not found', { status: 404, statusText: 'Not Found' });

// Error de red (la request nunca lleg\xF3)
req.error(new ProgressEvent('network error'));`),t()(),n(494,"h4"),e(495,"\u26A0\uFE0F Errores comunes"),t(),n(496,"ul")(497,"li"),e(498,"Olvidar suscribirse al observable del servicio: HttpClient es lazy, sin subscribe no hay request y "),n(499,"code"),e(500,"expectOne"),t(),e(501,' falla con "no matching request".'),t(),n(502,"li"),e(503,"No llamar "),n(504,"code"),e(505,"httpMock.verify()"),t(),e(506," en afterEach: requests inesperadas pasan desapercibidas."),t(),n(507,"li")(508,"code"),e(509,"expectOne('/api/products')"),t(),e(510," no matchea si el servicio a\xF1ade query params: usa "),n(511,"code"),e(512,"r => r.url === ..."),t(),e(513," (url sin params) o incluye los params exactos."),t(),n(514,"li"),e(515,"Asertar dentro del subscribe sin capturar el valor fuera: si flush nunca ocurre, el expect nunca corre y el test pasa en falso."),t()(),n(516,"h4"),e(517,"\u{1F3A4} Preguntas de entrevista"),t(),n(518,"ul")(519,"li")(520,"strong"),e(521,"\xBFDiferencia entre "),n(522,"code"),e(523,"expectOne"),t(),e(524," y "),n(525,"code"),e(526,"match"),t(),e(527,"?"),t(),e(528," \u2014 expectOne exige exactamente una request que coincida (falla con 0 o >1); match devuelve todas las coincidencias sin asertar cantidad."),t(),n(529,"li")(530,"strong"),e(531,"\xBFC\xF3mo simulas un error 500 vs un fallo de red?"),t(),e(532," \u2014 "),n(533,"code"),e(534,"flush(body, {status: 500})"),t(),e(535," para respuesta de error del servidor; "),n(536,"code"),e(537,"req.error(new ProgressEvent(...))"),t(),e(538," para fallo de red/transporte."),t(),n(539,"li")(540,"strong"),e(541,"\xBFPor qu\xE9 "),n(542,"code"),e(543,"verify()"),t(),e(544," va en afterEach?"),t(),e(545," \u2014 Garantiza que cada test declar\xF3 TODAS las requests que su c\xF3digo dispar\xF3; detecta llamadas HTTP accidentales."),t()(),n(546,"div",3),e(547,' \u{1F4C2} Ejercicio relacionado en la pesta\xF1a Lab \u{1F9EA} \u2014 "5. Service Test" '),t()(),n(548,"div",8)(549,"h3"),e(550,"6. Marble Testing"),t(),n(551,"p"),e(552," Los diagramas marble representan flujos RxJS como strings ASCII, permitiendo testear operadores y streams con tiempo virtual y precisi\xF3n de frame. Con "),n(553,"code"),e(554,"TestScheduler"),t(),e(555," el tiempo no pasa de verdad: se calcula. "),t(),n(556,"h4"),e(557,"Sintaxis marble"),t(),n(558,"pre")(559,"code"),e(560,`' -a--b|'   //  - = 1 frame (1ms virtual en run mode)
            //  a,b = emisiones (next)
            //  | = complete       # = error
            //  () = emisiones s\xEDncronas agrupadas: '(ab|)' emite a, b y completa
            //  ^ = punto de suscripci\xF3n (hot)   ! = unsubscribe
            //  '100ms a' = sintaxis de tiempo expl\xEDcito`),t()(),n(561,"pre")(562,"code"),e(563,`import { TestScheduler } from 'rxjs/testing';

let scheduler: TestScheduler;

beforeEach(() => {
  scheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);   // conecta con Jasmine
  });
});

it('should debounce and map values', () => {
  scheduler.run(({ cold, hot, expectObservable, expectSubscriptions }) => {
    const source = cold('-a--b--c---|', { a: 1, b: 2, c: 3 });
    const expected =    '-x--y--z---|';

    const result = source.pipe(map(v => v * 10));

    expectObservable(result).toBe(expected, { x: 10, y: 20, z: 30 });
    expectSubscriptions(source.subscriptions).toBe('^----------!');
  });
});`),t()(),n(564,"h4"),e(565,"cold vs hot"),t(),n(566,"ul")(567,"li")(568,"code"),e(569,"cold('--a|')"),t(),e(570," \u2014 el observable empieza a emitir cuando alguien se suscribe (como HttpClient). Cada subscriber recibe la secuencia completa."),t(),n(571,"li")(572,"code"),e(573,"hot('--^-a|')"),t(),e(574,' \u2014 el stream ya est\xE1 "vivo"; '),n(575,"code"),e(576,"^"),t(),e(577," marca cu\xE1ndo se suscribe el test. Los valores anteriores a ^ se pierden (como eventos de usuario o un Subject)."),t()(),n(578,"p"),e(579," Dentro de "),n(580,"code"),e(581,"scheduler.run()"),t(),e(582,", operadores basados en tiempo ("),n(583,"code"),e(584,"debounceTime"),t(),e(585,", "),n(586,"code"),e(587,"delay"),t(),e(588,", "),n(589,"code"),e(590,"interval"),t(),e(591,") usan el reloj virtual autom\xE1ticamente \u2014 un "),n(592,"code"),e(593,"debounceTime(300)"),t(),e(594," se testea en microsegundos. "),t(),n(595,"h4"),e(596,"\u26A0\uFE0F Errores comunes"),t(),n(597,"ul")(598,"li"),e(599,'Crear el TestScheduler sin la funci\xF3n de aserci\xF3n \u2192 los tests "pasan" aunque los marbles no coincidan.'),t(),n(600,"li"),e(601,"Contar mal los frames: cada car\xE1cter es 1 frame, y la emisi\xF3n tambi\xE9n consume un frame. "),n(602,"code"),e(603,"'-a-b'"),t(),e(604,": a en frame 1, b en frame 3."),t(),n(605,"li"),e(606,"Usar cold cuando el comportamiento depende de suscripci\xF3n tard\xEDa (multicast): necesitas hot con "),n(607,"code"),e(608,"^"),t(),e(609,"."),t(),n(610,"li"),e(611,"Reutilizar el mismo TestScheduler entre tests sin recrearlo en beforeEach: el tiempo virtual queda contaminado."),t()(),n(612,"h4"),e(613,"\u{1F3A4} Preguntas de entrevista"),t(),n(614,"ul")(615,"li")(616,"strong"),e(617,"\xBFQu\xE9 ventaja da marble testing sobre subscribe + done?"),t(),e(618," \u2014 Verifica la secuencia COMPLETA con su timing exacto (valores, orden, tiempo, complete/error) de forma s\xEDncrona y sin flakiness."),t(),n(619,"li")(620,"strong"),e(621,"\xBFDiferencia entre cold y hot en un test?"),t(),e(622," \u2014 cold emite desde el principio para cada subscriber; hot emite independientemente de los subscribers y ^ define cu\xE1ndo entra el test."),t(),n(623,"li")(624,"strong"),e(625,"\xBFC\xF3mo testeas un "),n(626,"code"),e(627,"debounceTime(300)"),t(),e(628," sin esperar 300ms?"),t(),e(629," \u2014 Dentro de "),n(630,"code"),e(631,"scheduler.run()"),t(),e(632," el operador usa el scheduler virtual: el tiempo se simula, no transcurre."),t()(),n(633,"div",3),e(634,' \u{1F4C2} Ejercicio relacionado en la pesta\xF1a Lab \u{1F9EA} \u2014 "4. NgRx Effects" (marble o Subject) '),t()(),n(635,"div",9)(636,"h3"),e(637,"7. Testing de Componentes con Signals e Inputs"),t(),n(638,"p"),e(639," Los componentes modernos usan "),n(640,"code"),e(641,"signal()"),t(),e(642," para estado local e "),n(643,"code"),e(644,"input()"),t(),e(645," para datos de entrada. Los signals se leen como funciones ("),n(646,"code"),e(647,"component.counter()"),t(),e(648,") y los inputs se establecen desde el test con "),n(649,"code"),e(650,"fixture.componentRef.setInput()"),t(),e(651," \u2014 nunca por asignaci\xF3n directa. "),t(),n(652,"pre")(653,"code"),e(654,`// Componente bajo test
export class ProductCardComponent {
  readonly product = input.required<Product>();   // InputSignal: solo lectura
  readonly highlighted = input(false);
  readonly discounted = computed(() => this.product().price < 50);
}

// Test
it('should compute discount from input', () => {
  const fixture = TestBed.createComponent(ProductCardComponent);

  // \u2705 la \xFAnica forma correcta de setear un input signal
  fixture.componentRef.setInput('product', { id: '1', name: 'Tee', price: 29.99 });
  fixture.componentRef.setInput('highlighted', true);
  fixture.detectChanges();

  expect(fixture.componentInstance.discounted()).toBeTrue();
  const el = fixture.nativeElement.querySelector('.badge');
  expect(el.textContent).toContain('Oferta');
});`),t()(),n(655,"p")(656,"code"),e(657,"setInput"),t(),e(658," funciona igual para "),n(659,"code"),e(660,"@Input()"),t(),e(661," cl\xE1sicos y para "),n(662,"code"),e(663,"input()"),t(),e(664," signals, y adem\xE1s marca el componente para check (importante con OnPush). Para probar estado local basta con llamar los m\xE9todos p\xFAblicos y leer el signal, como hace este lab: "),t(),n(665,"pre")(666,"code"),e(667,`it('should increment the counter', () => {
  component.increment();
  expect(component.counter()).toBe(1);   // leer un signal = invocarlo
});

it('should display the counter value in the template', () => {
  component.increment();
  fixture.detectChanges();               // sincroniza signal \u2192 DOM
  const el = fixture.nativeElement.querySelector('[data-testid="counter-value"]');
  expect(el.textContent?.trim()).toBe('1');
});`),t()(),n(668,"p"),e(669," Alternativa para "),n(670,"code"),e(671,"output()"),t(),e(672," y proyecci\xF3n de contenido: el "),n(673,"em"),e(674,"host component pattern"),t(),e(675," (ver card 11) \u2014 un componente wrapper definido en el spec que usa el componente real en su template. "),t(),n(676,"h4"),e(677,"\u26A0\uFE0F Errores comunes"),t(),n(678,"ul")(679,"li"),e(680,"Asignar directamente "),n(681,"code"),e(682,"component.product = value"),t(),e(683," con input signals \u2192 error en runtime: "),n(684,"code"),e(685,"InputSignal"),t(),e(686," no es escribible."),t(),n(687,"li"),e(688,"Olvidar los par\xE9ntesis al leer: "),n(689,"code"),e(690,"expect(component.counter).toBe(1)"),t(),e(691," compara la funci\xF3n, no el valor."),t(),n(692,"li"),e(693,"No llamar "),n(694,"code"),e(695,"detectChanges()"),t(),e(696," tras "),n(697,"code"),e(698,"setInput"),t(),e(699,": el "),n(700,"code"),e(701,"computed"),t(),e(702," se recalcula lazy al leerlo, pero el DOM no se actualiza solo."),t(),n(703,"li"),e(704,"Testear un "),n(705,"code"),e(706,"input.required"),t(),e(707," sin setearlo \u2192 error "),n(708,"code"),e(709,"NG0950: required input is accessed before a value is set"),t(),e(710,"."),t()(),n(711,"h4"),e(712,"\u{1F3A4} Preguntas de entrevista"),t(),n(713,"ul")(714,"li")(715,"strong"),e(716,"\xBFPor qu\xE9 "),n(717,"code"),e(718,"setInput"),t(),e(719," y no asignaci\xF3n directa?"),t(),e(720," \u2014 Respeta el ciclo de inputs de Angular (transforms, marcado OnPush, ngOnChanges en inputs cl\xE1sicos) y es la \xFAnica v\xEDa para InputSignal, que es read-only."),t(),n(721,"li")(722,"strong"),e(723,"\xBFC\xF3mo testeas un "),n(724,"code"),e(725,"computed()"),t(),e(726,"?"),t(),e(727," \u2014 Seteas sus dependencias (signals/inputs) y lees el computed: al ser derivaci\xF3n pura no necesita DOM."),t(),n(728,"li")(729,"strong"),e(730,"\xBFLos signals necesitan fakeAsync?"),t(),e(731," \u2014 No: escribir y leer signals es s\xEDncrono. Solo la actualizaci\xF3n del DOM requiere detectChanges."),t()(),n(732,"div",3),e(733," \u{1F4C2} "),n(734,"code"),e(735,"features/testing-lab/testing-demo.spec.ts"),t(),e(736,' \u2014 tests del counter con signals (describe "Counter") '),t(),n(737,"div",3),e(738," \u{1F4C2} "),n(739,"code"),e(740,"features/testing-lab/testing-demo.ts"),t(),e(741," \u2014 signals: counter, products, loading, error "),t()(),n(742,"div",10)(743,"h3"),e(744,"8. Testing de Servicios"),t(),n(745,"p"),e(746," Dos estrategias: "),n(747,"strong"),e(748,"aislada"),t(),e(749," (instanciar la clase a mano, sin Angular) y "),n(750,"strong"),e(751,"con TestBed"),t(),e(752," (usar el injector real). La aislada es m\xE1s r\xE1pida y simple; TestBed es necesario cuando el servicio usa "),n(753,"code"),e(754,"inject()"),t(),e(755," en field initializers o depende del \xE1rbol de DI. "),t(),n(756,"pre")(757,"code"),e(758,`// A) Aislado \u2014 constructor injection, sin TestBed
it('should compute totals (isolated)', () => {
  const logger = jasmine.createSpyObj<LoggerService>('Logger', ['log']);
  const service = new CartService(logger);   // new directo

  service.add({ id: '1', price: 10 });
  expect(service.total()).toBe(10);
  expect(logger.log).toHaveBeenCalled();
});`),t()(),n(759,"pre")(760,"code"),e(761,`// B) Con TestBed \u2014 necesario si el servicio usa inject()
describe('ProductService', () => {
  let service: ProductService;
  let apiSpy: jasmine.SpyObj<MockApiService>;

  beforeEach(() => {
    apiSpy = jasmine.createSpyObj<MockApiService>('MockApiService', ['getProducts']);

    TestBed.configureTestingModule({
      providers: [
        ProductService,
        { provide: MockApiService, useValue: apiSpy },
      ],
    });
    service = TestBed.inject(ProductService);  // resuelve TODO el \xE1rbol de deps
  });

  it('should filter sustainable products', () => {
    apiSpy.getProducts.and.returnValue(of(mockProducts));

    let result: Product[] = [];
    service.getSustainable(80).subscribe(p => (result = p));

    expect(result.every(p => p.sustainabilityScore >= 80)).toBeTrue();
  });
});`),t()(),n(762,"p"),e(763," Los servicios "),n(764,"code"),e(765,"providedIn: 'root'"),t(),e(766," no necesitan declararse en providers \u2014 TestBed los resuelve \u2014 pero S\xCD debes sobreescribir sus dependencias si quieres aislarlos. Para c\xF3digo que usa "),n(767,"code"),e(768,"inject()"),t(),e(769," fuera de un contexto de construcci\xF3n, existe "),n(770,"code"),e(771,"TestBed.runInInjectionContext(() => ...)"),t(),e(772,". "),t(),n(773,"h4"),e(774,"\u26A0\uFE0F Errores comunes"),t(),n(775,"ul")(776,"li"),e(777,"Instanciar con "),n(778,"code"),e(779,"new"),t(),e(780," un servicio que usa "),n(781,"code"),e(782,"inject()"),t(),e(783," \u2192 "),n(784,"code"),e(785,"NG0203: inject() must be called from an injection context"),t(),e(786,"."),t(),n(787,"li"),e(788,"Testear el servicio a trav\xE9s del componente: si falla, no sabes qu\xE9 capa rompi\xF3. Test\xE9alos por separado."),t(),n(789,"li"),e(790,"Compartir estado entre tests con servicios singleton: TestBed se resetea entre specs, pero variables module-scope del spec no."),t(),n(791,"li"),e(792,"Mockear TODO, incluidas funciones puras del propio servicio: termina testeando los mocks, no el servicio."),t()(),n(793,"h4"),e(794,"\u{1F3A4} Preguntas de entrevista"),t(),n(795,"ul")(796,"li")(797,"strong"),e(798,"\xBFCu\xE1ndo usar TestBed.inject vs new?"),t(),e(799," \u2014 new para clases con constructor injection y l\xF3gica pura (m\xE1s r\xE1pido); TestBed cuando hay inject(), providers jer\xE1rquicos o interceptors involucrados."),t(),n(800,"li")(801,"strong"),e(802,"\xBFC\xF3mo testeas un servicio "),n(803,"code"),e(804,"providedIn: 'root'"),t(),e(805," con dependencias?"),t(),e(806," \u2014 Lo obtienes con TestBed.inject y sustituyes sus dependencias con "),n(807,"code"),e(808,"{ provide: Dep, useValue: spy }"),t(),e(809,"."),t(),n(810,"li")(811,"strong"),e(812,"\xBFQu\xE9 es un injection context?"),t(),e(813," \u2014 El \xE1mbito donde inject() es v\xE1lido: constructores/inicializadores de clases DI, factories de providers, o runInInjectionContext."),t()(),n(814,"div",3),e(815," \u{1F4C2} "),n(816,"code"),e(817,"core/services/mock-api.service.ts"),t(),e(818," \u2014 servicio bajo test en los ejercicios del Lab \u{1F9EA} "),t()(),n(819,"div",11)(820,"h3"),e(821,"9. Mocking de Dependencias"),t(),n(822,"p"),e(823," El injector de Angular hace el mocking trivial: en el TestBed sustituyes cualquier token por un doble. Las tres formas principales son "),n(824,"code"),e(825,"useValue"),t(),e(826,", "),n(827,"code"),e(828,"useClass"),t(),e(829," y "),n(830,"code"),e(831,"useFactory"),t(),e(832,", m\xE1s "),n(833,"code"),e(834,"spyOn"),t(),e(835," sobre la instancia real cuando solo quieres interceptar un m\xE9todo. "),t(),n(836,"pre")(837,"code"),e(838,`// useValue: objeto/spy concreto \u2014 el caso m\xE1s com\xFAn
{ provide: MockApiService, useValue: jasmine.createSpyObj('Api', ['getProducts']) }

// useClass: implementaci\xF3n fake completa con estado propio
class FakeAuthService {
  private loggedIn = false;
  login() { this.loggedIn = true; return of(true); }
  isAuthenticated() { return this.loggedIn; }
}
{ provide: AuthService, useClass: FakeAuthService }

// useFactory: cuando el mock depende de otro token
{ provide: ConfigService,
  useFactory: (env: EnvService) => new FakeConfig(env.name),
  deps: [EnvService] }

// spyOn sobre la instancia REAL: m\xEDnima intervenci\xF3n
const service = TestBed.inject(ProductService);
spyOn(service, 'getAll').and.returnValue(of(mockProducts));`),t()(),n(839,"h4"),e(840,"\xBFSpy parcial o mock completo?"),t(),n(841,"ul")(842,"li")(843,"strong"),e(844,"spyOn (parcial):"),t(),e(845," el resto del servicio sigue siendo real. Bueno para interceptar un solo m\xE9todo; peligroso si el constructor real tiene side effects (HTTP, timers)."),t(),n(846,"li")(847,"strong"),e(848,"createSpyObj / useValue (completo):"),t(),e(849," aislamiento total y sin side effects; requiere definir el comportamiento de cada m\xE9todo usado."),t(),n(850,"li")(851,"strong"),e(852,"useClass (fake con l\xF3gica):"),t(),e(853," ideal cuando el doble necesita estado coherente entre llamadas (ej. un fake de storage o auth)."),t()(),n(854,"p"),e(855," Herramientas extra: "),n(856,"code"),e(857,"TestBed.overrideProvider()"),t(),e(858," para reemplazar providers despu\xE9s de configurar (gana incluso sobre providers del propio componente) y "),n(859,"code"),e(860,"TestBed.overrideComponent()"),t(),e(861," para tocar template/imports del componente bajo test. Evita "),n(862,"code"),e(863,"NO_ERRORS_SCHEMA"),t(),e(864,": silencia errores de template y esconde typos en bindings. "),t(),n(865,"h4"),e(866,"\u26A0\uFE0F Errores comunes"),t(),n(867,"ul")(868,"li"),e(869,"Mutar el objeto de "),n(870,"code"),e(871,"useValue"),t(),e(872," entre tests sin restaurarlo: los specs se contaminan entre s\xED. Recr\xE9alo en "),n(873,"code"),e(874,"beforeEach"),t(),e(875,"."),t(),n(876,"li"),e(877,"Mockear lo que no posees en exceso (ej. HttpClient a mano): usa las utilidades oficiales (HttpTestingController, provideMockStore)."),t(),n(878,"li"),e(879,"Que el mock se desv\xEDe del contrato real y el test pase mientras producci\xF3n falla: tipa los dobles ("),n(880,"code"),e(881,"jasmine.SpyObj<T>"),t(),e(882,") para que TypeScript vigile las firmas."),t(),n(883,"li"),e(884,"Providers a nivel de componente ("),n(885,"code"),e(886,"providers: []"),t(),e(887," en el decorador) que ignoran tu mock del TestBed: usa "),n(888,"code"),e(889,"overrideComponent"),t(),e(890," u "),n(891,"code"),e(892,"overrideProvider"),t(),e(893,"."),t()(),n(894,"h4"),e(895,"\u{1F3A4} Preguntas de entrevista"),t(),n(896,"ul")(897,"li")(898,"strong"),e(899,"\xBFCu\xE1ndo useValue vs useClass?"),t(),e(900," \u2014 useValue para dobles simples/spies preconstruidos; useClass cuando el fake necesita comportamiento y estado propios instanciados por el injector."),t(),n(901,"li")(902,"strong"),e(903,"\xBFPor qu\xE9 tipar los spies con "),n(904,"code"),e(905,"SpyObj<T>"),t(),e(906,"?"),t(),e(907," \u2014 El compilador verifica que el mock respeta la firma real: si el servicio cambia, el test no compila en vez de fallar en runtime (o peor, pasar)."),t(),n(908,"li")(909,"strong"),e(910,"\xBFQu\xE9 riesgo tiene "),n(911,"code"),e(912,"NO_ERRORS_SCHEMA"),t(),e(913,"?"),t(),e(914," \u2014 Silencia elementos y bindings desconocidos: un typo en un input deja de ser error y el test da falsa confianza."),t()(),n(915,"div",3),e(916," \u{1F4C2} "),n(917,"code"),e(918,"features/testing-lab/testing-demo.spec.ts"),t(),e(919," \u2014 useValue + createSpyObj para MockApiService "),t()(),n(920,"div",12)(921,"h3"),e(922,"10. Testing de NgRx: Reducers, Selectors y Effects"),t(),n(923,"p"),e(924," Cada pieza de NgRx se testea a su nivel: reducers y selectors son funciones puras (tests unitarios triviales, sin TestBed); los effects son streams (se testean con "),n(925,"code"),e(926,"provideMockActions"),t(),e(927," y marbles o suscripci\xF3n directa). "),t(),n(928,"h4"),e(929,"Reducers: estado + acci\xF3n = nuevo estado"),t(),n(930,"pre")(931,"code"),e(932,`describe('productReducer', () => {
  it('should set loading on loadProducts', () => {
    const state = productReducer(initialState, ProductActions.loadProducts());
    expect(state.loading).toBeTrue();
    expect(state.error).toBeNull();
  });

  it('should populate products on success', () => {
    const state = productReducer(
      { ...initialState, loading: true },
      ProductActions.loadProductsSuccess({ products: mockProducts })
    );
    expect(state.products).toEqual(mockProducts);
    expect(state.loading).toBeFalse();
  });

  it('should return same state for unknown action', () => {
    const state = productReducer(initialState, { type: 'NOOP' } as any);
    expect(state).toBe(initialState);   // misma referencia = inmutabilidad OK
  });
});`),t()(),n(933,"h4"),e(934,"Selectors: usa projector()"),t(),n(935,"pre")(936,"code"),e(937,`it('should select products above sustainability threshold', () => {
  // projector salta la memoizaci\xF3n y el estado global:
  // pasas directamente las ENTRADAS del selector
  const result = selectHighSustainability.projector(mockProducts, 80);
  expect(result.length).toBe(1);
  expect(result[0].sustainabilityScore).toBeGreaterThanOrEqual(80);
});`),t()(),n(938,"h4"),e(939,"Effects: provideMockActions"),t(),n(940,"pre")(941,"code"),e(942,`import { provideMockActions } from '@ngrx/effects/testing';

describe('ProductEffects', () => {
  let actions$: Observable<Action>;
  let effects: ProductEffects;
  let apiSpy: jasmine.SpyObj<MockApiService>;

  beforeEach(() => {
    apiSpy = jasmine.createSpyObj('Api', ['getProducts']);
    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        provideMockActions(() => actions$),
        { provide: MockApiService, useValue: apiSpy },
      ],
    });
    effects = TestBed.inject(ProductEffects);
  });

  it('should dispatch success on API ok', (done) => {
    apiSpy.getProducts.and.returnValue(of(mockProducts));
    actions$ = of(ProductActions.loadProducts());

    effects.loadProducts$.subscribe(action => {
      expect(action).toEqual(
        ProductActions.loadProductsSuccess({ products: mockProducts })
      );
      done();
    });
  });

  it('should dispatch failure on API error (marble)', () => {
    scheduler.run(({ cold, expectObservable }) => {
      actions$ = cold('-a', { a: ProductActions.loadProducts() });
      apiSpy.getProducts.and.returnValue(cold('-#', {}, new Error('boom')));

      expectObservable(effects.loadProducts$).toBe('--b', {
        b: ProductActions.loadProductsFailure({ error: 'boom' }),
      });
    });
  });
});`),t()(),n(943,"h4"),e(944,"\u26A0\uFE0F Errores comunes"),t(),n(945,"ul")(946,"li"),e(947,"Testear reducers v\xEDa el Store completo: son funciones puras, ll\xE1malas directamente."),t(),n(948,"li"),e(949,'Olvidar el caso "acci\xF3n desconocida devuelve el mismo estado" \u2014 detecta mutaciones accidentales.'),t(),n(950,"li"),e(951,"En effects con done: si el effect nunca emite, el test se cuelga hasta timeout en vez de fallar claro. El marble falla al instante."),t(),n(952,"li"),e(953,"Usar el selector completo (con estado global gigante) en vez de "),n(954,"code"),e(955,"projector()"),t(),e(956,": acopla el test a la forma de TODO el estado."),t()(),n(957,"h4"),e(958,"\u{1F3A4} Preguntas de entrevista"),t(),n(959,"ul")(960,"li")(961,"strong"),e(962,"\xBFPor qu\xE9 los reducers son tan f\xE1ciles de testear?"),t(),e(963," \u2014 Son funciones puras y s\xEDncronas: mismas entradas \u2192 misma salida, sin mocks ni DI."),t(),n(964,"li")(965,"strong"),e(966,"\xBFQu\xE9 hace "),n(967,"code"),e(968,"projector()"),t(),e(969,"?"),t(),e(970," \u2014 Ejecuta la funci\xF3n de proyecci\xF3n del selector con las entradas que le pases, salt\xE1ndose memoizaci\xF3n y selectors padre."),t(),n(971,"li")(972,"strong"),e(973,"\xBFC\xF3mo testeas que un effect NO despacha nada (dispatch: false)?"),t(),e(974," \u2014 Suscr\xEDbete y verifica el side effect (spy llamado) en lugar de la emisi\xF3n, o aserta el marble vac\xEDo "),n(975,"code"),e(976,"''"),t(),e(977,"."),t()(),n(978,"div",3),e(979," \u{1F4C2} "),n(980,"code"),e(981,"features/testing-lab/testing-demo.spec.ts"),t(),e(982," \u2014 TODOs de reducer/selectors/effects al final del archivo "),t(),n(983,"div",3),e(984," \u{1F4C2} Ejercicios 2, 3 y 4 en la pesta\xF1a Lab \u{1F9EA} "),t()(),n(985,"div",13)(986,"h3"),e(987,"11. Testing de Pipes y Directivas"),t(),n(988,"p"),e(989," Un pipe puro es una clase con un m\xE9todo "),n(990,"code"),e(991,"transform"),t(),e(992,": se testea con "),n(993,"code"),e(994,"new"),t(),e(995,", sin TestBed. Una directiva no vive sola \u2014 necesita un elemento donde aplicarse \u2014 as\xED que se testea con el "),n(996,"em"),e(997,"host component pattern"),t(),e(998,": un componente de prueba definido en el spec cuyo template usa la directiva. "),t(),n(999,"h4"),e(1e3,"Pipes: unit test puro"),t(),n(1001,"pre")(1002,"code"),e(1003,`describe('SustainabilityLabelPipe', () => {
  const pipe = new SustainabilityLabelPipe();

  it('should label high scores', () => {
    expect(pipe.transform(85)).toBe('\u{1F331} Eco l\xEDder');
  });

  it('should handle edge values', () => {
    expect(pipe.transform(0)).toBe('Sin datos');
    expect(pipe.transform(null)).toBe('Sin datos');
  });
});`),t()(),n(1004,"h4"),e(1005,"Directivas: host component pattern"),t(),n(1006,"pre")(1007,"code"),e(1008,`// Componente host definido SOLO en el spec
@Component({
  imports: [HighlightDirective],
  template: \`<p appHighlight="gold" data-testid="target">Texto</p>\`,
})
class HostComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HostComponent] })
      .compileComponents();
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it('should highlight on mouseenter', () => {
    const p = fixture.debugElement.query(By.css('[data-testid="target"]'));

    p.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();

    expect(p.nativeElement.style.backgroundColor).toBe('gold');
  });

  it('should expose the directive instance', () => {
    const dirEl = fixture.debugElement.query(By.directive(HighlightDirective));
    const directive = dirEl.injector.get(HighlightDirective);
    expect(directive).toBeTruthy();
  });
});`),t()(),n(1009,"p"),e(1010," El mismo patr\xF3n sirve para testear componentes con "),n(1011,"code"),e(1012,"output()"),t(),e(1013,", proyecci\xF3n de contenido ("),n(1014,"code"),e(1015,"ng-content"),t(),e(1016,") o interacci\xF3n padre-hijo realista. "),t(),n(1017,"h4"),e(1018,"\u26A0\uFE0F Errores comunes"),t(),n(1019,"ul")(1020,"li"),e(1021,"Levantar TestBed para un pipe puro: sobreingenier\xEDa; "),n(1022,"code"),e(1023,"new Pipe()"),t(),e(1024," basta."),t(),n(1025,"li"),e(1026,"Testear la directiva llamando sus m\xE9todos directamente sin DOM: no verifica el binding real con el elemento host (HostListener/HostBinding)."),t(),n(1027,"li"),e(1028,"Olvidar importar la directiva en el "),n(1029,"code"),e(1030,"imports"),t(),e(1031," del host component \u2192 la directiva simplemente no se aplica y los asserts fallan sin error de compilaci\xF3n (con esquemas laxos)."),t(),n(1032,"li"),e(1033,"Pipes impuros testeados como puros: verifica tambi\xE9n el comportamiento por referencia/mutaci\xF3n."),t()(),n(1034,"h4"),e(1035,"\u{1F3A4} Preguntas de entrevista"),t(),n(1036,"ul")(1037,"li")(1038,"strong"),e(1039,"\xBFPor qu\xE9 las directivas necesitan un host component?"),t(),e(1040," \u2014 Su comportamiento depende del elemento al que se aplican (listeners, bindings de atributos); sin DOM host no hay nada que observar."),t(),n(1041,"li")(1042,"strong"),e(1043,"\xBFC\xF3mo obtienes la instancia de una directiva en el test?"),t(),e(1044," \u2014 "),n(1045,"code"),e(1046,"debugElement.query(By.directive(X)).injector.get(X)"),t(),e(1047,"."),t(),n(1048,"li")(1049,"strong"),e(1050,"\xBFQu\xE9 diferencia hay al testear un pipe puro vs impuro?"),t(),e(1051," \u2014 El puro solo depende de sus argumentos (test trivial); el impuro puede depender de estado externo y se recalcula cada CD: hay que testear ambos disparadores."),t()()(),n(1052,"div",14)(1053,"h3"),e(1054,"12. Testing de Formularios Reactivos"),t(),n(1055,"p"),e(1056," Los formularios reactivos viven en la clase, as\xED que gran parte se testea sin DOM: "),n(1057,"code"),e(1058,"setValue"),t(),e(1059,"/"),n(1060,"code"),e(1061,"patchValue"),t(),e(1062,", estados de validez y errores. El DOM entra cuando quieres verificar que el usuario ve los mensajes y que los inputs est\xE1n enlazados de verdad. "),t(),n(1063,"pre")(1064,"code"),e(1065,`describe('ProductFormComponent', () => {
  it('should be invalid when empty', () => {
    expect(component.form.valid).toBeFalse();
    expect(component.form.get('name')?.hasError('required')).toBeTrue();
  });

  it('should validate price range', () => {
    const price = component.form.get('price')!;
    price.setValue(-5);
    expect(price.hasError('min')).toBeTrue();

    price.setValue(29.99);
    expect(price.valid).toBeTrue();
  });

  it('should submit valid form with payload', () => {
    spyOn(component.saved, 'emit');
    component.form.setValue({ name: 'Tee', price: 29.99, category: 'Textiles' });

    component.onSubmit();

    expect(component.saved.emit).toHaveBeenCalledWith(
      jasmine.objectContaining({ name: 'Tee' })
    );
  });
});`),t()(),n(1066,"h4"),e(1067,"Interacci\xF3n con el DOM real"),t(),n(1068,"pre")(1069,"code"),e(1070,`it('should show error message after user touches the field', () => {
  const input: HTMLInputElement =
    fixture.nativeElement.querySelector('[data-testid="name-input"]');

  // Simula escritura real del usuario
  input.value = '';
  input.dispatchEvent(new Event('input'));   // actualiza el FormControl
  input.dispatchEvent(new Event('blur'));    // marca touched
  fixture.detectChanges();

  const error = fixture.nativeElement.querySelector('[data-testid="name-error"]');
  expect(error.textContent).toContain('El nombre es obligatorio');
});`),t()(),n(1071,"h4"),e(1072,"Validators custom y async"),t(),n(1073,"pre")(1074,"code"),e(1075,`// Validator s\xEDncrono: funci\xF3n pura, sin TestBed
it('should reject forbidden words', () => {
  const control = new FormControl('spam');
  expect(forbiddenWordValidator(control)).toEqual({ forbidden: true });
});

// Validator async: fakeAsync + tick
it('should validate unique name against API', fakeAsync(() => {
  apiSpy.search.and.returnValue(of([existing]).pipe(delay(300)));
  const name = component.form.get('name')!;

  name.setValue('Organic Cotton T-Shirt');
  expect(name.pending).toBeTrue();      // validaci\xF3n en curso

  tick(300);
  expect(name.hasError('nameTaken')).toBeTrue();
}));`),t()(),n(1076,"h4"),e(1077,"\u26A0\uFE0F Errores comunes"),t(),n(1078,"ul")(1079,"li"),e(1080,"Setear "),n(1081,"code"),e(1082,"input.value"),t(),e(1083," sin despachar el evento "),n(1084,"code"),e(1085,"input"),t(),e(1086,": el FormControl nunca se entera."),t(),n(1087,"li"),e(1088,"Usar "),n(1089,"code"),e(1090,"setValue"),t(),e(1091," con objeto incompleto \u2192 lanza error; para parciales usa "),n(1092,"code"),e(1093,"patchValue"),t(),e(1094,"."),t(),n(1095,"li"),e(1096,"Asertar mensajes de error sin marcar el control como touched: la mayor\xEDa de templates los ocultan hasta "),n(1097,"code"),e(1098,"touched && invalid"),t(),e(1099,"."),t(),n(1100,"li"),e(1101,"Olvidar que los async validators dejan el control en estado "),n(1102,"code"),e(1103,"pending"),t(),e(1104," (ni valid ni invalid) hasta resolverse."),t()(),n(1105,"h4"),e(1106,"\u{1F3A4} Preguntas de entrevista"),t(),n(1107,"ul")(1108,"li")(1109,"strong"),e(1110,"\xBFsetValue vs patchValue en tests?"),t(),e(1111," \u2014 setValue exige la forma completa del grupo (falla r\xE1pido ante drift del form); patchValue acepta parciales."),t(),n(1112,"li")(1113,"strong"),e(1114,"\xBFC\xF3mo testeas un async validator?"),t(),e(1115," \u2014 Mockea la dependencia, usa fakeAsync, aserta "),n(1116,"code"),e(1117,"pending"),t(),e(1118," antes del tick y el error despu\xE9s."),t(),n(1119,"li")(1120,"strong"),e(1121,"\xBFQu\xE9 testeas en la clase y qu\xE9 en el DOM?"),t(),e(1122," \u2014 Reglas de validaci\xF3n y payload en la clase; visibilidad de errores, binding de inputs y accesibilidad en el DOM."),t()()(),n(1123,"div",15)(1124,"h3"),e(1125,"13. Coverage y Umbrales"),t(),n(1126,"p"),e(1127," El code coverage mide qu\xE9 porcentaje del c\xF3digo ejecutan tus tests, en cuatro m\xE9tricas: "),n(1128,"strong"),e(1129,"statements"),t(),e(1130,", "),n(1131,"strong"),e(1132,"branches"),t(),e(1133," (cada rama de if/switch/ternario), "),n(1134,"strong"),e(1135,"functions"),t(),e(1136," y "),n(1137,"strong"),e(1138,"lines"),t(),e(1139,". Es un detector de huecos, no una medida de calidad: 100% de coverage con asserts d\xE9biles no garantiza nada. "),t(),n(1140,"pre")(1141,"code"),e(1142,`# Genera el reporte en /coverage (HTML navegable + lcov)
ng test --code-coverage --watch=false

# karma.conf.js \u2014 falla el build si se baja del umbral
coverageReporter: {
  dir: require('path').join(__dirname, './coverage'),
  subdir: '.',
  reporters: [{ type: 'html' }, { type: 'text-summary' }, { type: 'lcov' }],
  check: {
    global: {
      statements: 80,
      branches: 75,
      functions: 80,
      lines: 80,
    },
  },
}`),t()(),n(1143,"p")(1144,"strong"),e(1145,"Umbral razonable:"),t(),e(1146," 75\u201385% global es un buen equilibrio en apps Angular. Sube el list\xF3n en c\xF3digo cr\xEDtico (reducers, servicios de dominio, validators: 90%+) y rel\xE1jalo en c\xF3digo declarativo de bajo riesgo (configuraci\xF3n de rutas, wiring de m\xF3dulos). Las "),n(1147,"em"),e(1148,"branches"),t(),e(1149," son la m\xE9trica m\xE1s honesta: revela los "),n(1150,"code"),e(1151,"else"),t(),e(1152," y casos de error que nadie teste\xF3."),t(),n(1153,"p"),e(1154," Para medir la "),n(1155,"em"),e(1156,"calidad"),t(),e(1157," de los tests (no solo su alcance) existe el mutation testing (Stryker): introduce bugs artificiales y comprueba si alg\xFAn test los detecta. "),t(),n(1158,"h4"),e(1159,"\u26A0\uFE0F Errores comunes"),t(),n(1160,"ul")(1161,"li"),e(1162,'Perseguir 100%: lleva a tests triviales que ejecutan c\xF3digo sin asertar comportamiento ("assertion-free coverage").'),t(),n(1163,"li"),e(1164,"Mirar solo lines y no branches: el happy path cubre l\xEDneas, pero los errores viven en las ramas."),t(),n(1165,"li"),e(1166,"Subir el umbral de golpe en un proyecto legacy: bloquea todo el equipo. Sube gradualmente y por carpeta."),t(),n(1167,"li"),e(1168,'Excluir archivos "dif\xEDciles" del coverage para maquillar el n\xFAmero.'),t()(),n(1169,"h4"),e(1170,"\u{1F3A4} Preguntas de entrevista"),t(),n(1171,"ul")(1172,"li")(1173,"strong"),e(1174,"\xBFEs 100% de coverage un buen objetivo?"),t(),e(1175," \u2014 No: coste marginal alt\xEDsimo y falsa seguridad. Mejor 80% con asserts fuertes y 90%+ en dominio cr\xEDtico."),t(),n(1176,"li")(1177,"strong"),e(1178,"\xBFDiferencia entre line coverage y branch coverage?"),t(),e(1179," \u2014 Line: la l\xEDnea se ejecut\xF3; branch: CADA camino de decisi\xF3n se ejecut\xF3. Un if sin else puede dar 100% lines y 50% branches."),t(),n(1180,"li")(1181,"strong"),e(1182,"\xBFQu\xE9 aporta mutation testing sobre coverage?"),t(),e(1183," \u2014 Verifica que los tests DETECTAN cambios de comportamiento, no solo que ejecutan el c\xF3digo."),t()()(),n(1184,"div",16)(1185,"h3"),e(1186,"14. Buenas Pr\xE1cticas de Testing"),t(),n(1187,"p"),e(1188," Los tests son c\xF3digo de producci\xF3n: se leen mucho m\xE1s de lo que se escriben. Estas pr\xE1cticas mantienen la suite \xFAtil, legible y resistente a refactors. "),t(),n(1189,"h4"),e(1190,"Patr\xF3n AAA: Arrange, Act, Assert"),t(),n(1191,"pre")(1192,"code"),e(1193,`it('should show error banner when the API fails', () => {
  // Arrange \u2014 prepara el mundo
  mockApiService.getProducts.and.returnValue(
    throwError(() => new Error('Network error'))
  );

  // Act \u2014 UNA acci\xF3n bajo test
  component.loadProducts();
  fixture.detectChanges();

  // Assert \u2014 verifica el comportamiento observable
  const banner = fixture.nativeElement.querySelector('[data-testid="error-message"]');
  expect(banner.textContent).toContain('Network error');
});`),t()(),n(1194,"h4"),e(1195,"Comportamiento, no implementaci\xF3n"),t(),n(1196,"pre")(1197,"code"),e(1198,`// \u274C MAL \u2014 acoplado a detalles internos: se rompe con cualquier refactor
expect(component['sortInternal']).toHaveBeenCalled();
expect((component as any)._cache.size).toBe(3);

// \u2705 BIEN \u2014 aserta lo que el usuario/consumidor observa
expect(component.products()).toEqual(sortedProducts);
expect(rows[0].textContent).toContain('Organic Cotton T-Shirt');`),t()(),n(1199,"h4"),e(1200,"Page Object en unit tests"),t(),n(1201,"p"),e(1202," Igual que en E2E, encapsula los selectores del template en un objeto: si el HTML cambia, actualizas UN lugar en vez de cincuenta tests. "),t(),n(1203,"pre")(1204,"code"),e(1205,`class DemoPage {
  constructor(private fixture: ComponentFixture<TestingDemoComponent>) {}

  get counterValue() {
    return this.fixture.nativeElement
      .querySelector('[data-testid="counter-value"]')?.textContent?.trim();
  }
  get productRows(): NodeListOf<HTMLElement> {
    return this.fixture.nativeElement.querySelectorAll('[data-testid="product-row"]');
  }
  clickIncrement() {
    this.fixture.nativeElement.querySelector('[data-testid="increment-btn"]').click();
    this.fixture.detectChanges();
  }
}

it('should increment via UI', () => {
  const page = new DemoPage(fixture);
  page.clickIncrement();
  expect(page.counterValue).toBe('1');
});`),t()(),n(1206,"h4"),e(1207,"Checklist profesional"),t(),n(1208,"ul")(1209,"li")(1210,"strong"),e(1211,"Un comportamiento por test:"),t(),e(1212,' nombres descriptivos ("should show error banner when API fails"), un motivo de fallo por spec.'),t(),n(1213,"li")(1214,"strong"),e(1215,"Selectores estables:"),t(),n(1216,"code"),e(1217,"data-testid"),t(),e(1218," en vez de clases CSS o estructura del DOM."),t(),n(1219,"li")(1220,"strong"),e(1221,"Deterministas:"),t(),e(1222," nada de fechas reales ("),n(1223,"code"),e(1224,"jasmine.clock().mockDate()"),t(),e(1225,"), random sin semilla ni timers reales."),t(),n(1226,"li")(1227,"strong"),e(1228,"Sin l\xF3gica en los tests:"),t(),e(1229," ni ifs ni loops complejos; si los necesitas, el test est\xE1 mal dise\xF1ado."),t(),n(1230,"li")(1231,"strong"),e(1232,"Independientes:"),t(),e(1233," cada test debe pasar solo y en cualquier orden; estado nuevo en cada beforeEach."),t(),n(1234,"li")(1235,"strong"),e(1236,"R\xE1pidos:"),t(),e(1237," tiempo virtual (fakeAsync/TestScheduler), mocks para I/O, TestBed m\xEDnimo."),t()(),n(1238,"h4"),e(1239,"\u26A0\uFE0F Errores comunes"),t(),n(1240,"ul")(1241,"li"),e(1242,"Tests que esp\xEDan m\xE9todos privados o leen estado interno: cualquier refactor los rompe aunque el comportamiento sea id\xE9ntico."),t(),n(1243,"li"),e(1244,"Un solo it gigante con 20 asserts: cuando falla, no sabes qu\xE9 se rompi\xF3."),t(),n(1245,"li"),e(1246,"Copiar-pegar el beforeEach entre archivos con variaciones sutiles: extrae helpers de setup."),t(),n(1247,"li"),e(1248,'Tests flaky tolerados ("relanza el CI"): erosionan la confianza en toda la suite. Un flaky se arregla o se borra.'),t()(),n(1249,"h4"),e(1250,"\u{1F3A4} Preguntas de entrevista"),t(),n(1251,"ul")(1252,"li")(1253,"strong"),e(1254,'\xBFQu\xE9 significa "testear comportamiento y no implementaci\xF3n"?'),t(),e(1255," \u2014 Asertar salidas observables (DOM, valores retornados, llamadas a colaboradores externos) en vez de detalles internos; as\xED los refactors no rompen tests."),t(),n(1256,"li")(1257,"strong"),e(1258,"\xBFQu\xE9 es el patr\xF3n AAA?"),t(),e(1259," \u2014 Estructurar cada test en Arrange (setup), Act (una acci\xF3n) y Assert (verificaci\xF3n), separados visualmente para m\xE1xima legibilidad."),t(),n(1260,"li")(1261,"strong"),e(1262,"\xBFC\xF3mo manejas un test flaky?"),t(),e(1263," \u2014 Se cuarentena y diagnostica ya: casi siempre es async mal controlado, estado compartido o dependencia de orden. Nunca se normaliza el re-run."),t()(),n(1264,"div",3),e(1265," \u{1F4C2} "),n(1266,"code"),e(1267,"features/testing-lab/testing-demo.html"),t(),e(1268," \u2014 data-testid en todos los elementos testeables "),t(),n(1269,"div",3),e(1270," \u{1F4C2} "),n(1271,"code"),e(1272,"features/testing-lab/testing-demo.spec.ts"),t(),e(1273," \u2014 estructura AAA en los 13 tests del lab "),t()()())},dependencies:[o],styles:["[_nghost-%COMP%]{display:block;padding:1rem 0}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.2rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .6rem;font-size:1.1rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:6px;padding:.8rem;overflow-x:auto;font-size:.85rem;line-height:1.5}code[_ngcontent-%COMP%]{color:var(--text)}"]})};export{l as TestingLearnComponent};
