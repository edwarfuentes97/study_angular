import{Gb as n,Hb as t,Zb as e,fb as d}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var m=class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=d({type:i,selectors:[["app-testing-learn"]],decls:121,vars:0,consts:[["appAutoGlossary","",1,"cards"],["id","1-testbed-amp-componentfixture",1,"card"],[1,"code-ref"],["id","2-fakeasync-amp-tick",1,"card"],["id","3-jasmine-spies",1,"card"],["id","4-mockstore-ngrx",1,"card"],["id","5-httptestingcontroller",1,"card"],["id","6-marble-testing",1,"card"]],template:function(o,a){o&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),e(3,"1. TestBed & ComponentFixture"),t(),n(4,"p"),e(5," TestBed es el entorno de testing de Angular. Configura un m\xF3dulo de prueba con "),n(6,"code"),e(7,"configureTestingModule"),t(),e(8,", crea instancias de componentes con "),n(9,"code"),e(10,"createComponent"),t(),e(11," y dispara la detecci\xF3n de cambios con "),n(12,"code"),e(13,"detectChanges()"),t(),e(14,". "),t(),n(15,"pre")(16,"code"),e(17,`describe('MyComponent', () => {
  let fixture: ComponentFixture<MyComponent>;
  let component: MyComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoGlossaryDirective, MyComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title', () => {
    const el = fixture.nativeElement.querySelector('h1');
    expect(el.textContent).toContain('Mi T\xEDtulo');
  });
});`),t()(),n(18,"div",2),e(19," \u{1F4C2} "),n(20,"code"),e(21,"features/testing-lab/testing-demo.spec.ts"),t(),e(22," \u2014 TestBed.configureTestingModule con ComponentFixture "),t(),n(23,"div",2),e(24," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(25,"ul")(26,"li")(27,"code"),e(28,"features/testing-lab/testing-demo.spec.ts"),t(),e(29," \u2014 13 tests: render, clicks, async, mocking"),t(),n(30,"li")(31,"code"),e(32,"app.spec.ts"),t(),e(33," \u2014 Test b\xE1sico del componente ra\xEDz"),t()()()(),n(34,"div",3)(35,"h3"),e(36,"2. fakeAsync & tick"),t(),n(37,"p")(38,"code"),e(39,"fakeAsync"),t(),e(40," permite ejecutar c\xF3digo as\xEDncrono de forma s\xEDncrona en tests. "),n(41,"code"),e(42,"tick(ms)"),t(),e(43," simula el paso del tiempo, avanzando timers y promesas pendientes. "),t(),n(44,"pre")(45,"code"),e(46,`it('should load data after delay', fakeAsync(() => {
  component.loadData();
  tick(1000); // simula 1 segundo
  fixture.detectChanges();
  expect(component.data().length).toBeGreaterThan(0);
}));`),t()(),n(47,"div",2),e(48," \u{1F4C2} "),n(49,"code"),e(50,"features/testing-lab/testing-demo.spec.ts"),t(),e(51," \u2014 fakeAsync + tick para operaciones as\xEDncronas "),t()(),n(52,"div",4)(53,"h3"),e(54,"3. Jasmine Spies"),t(),n(55,"p"),e(56," Los spies interceptan llamadas a m\xE9todos. Usa "),n(57,"code"),e(58,"spyOn"),t(),e(59," para espiar, "),n(60,"code"),e(61,"returnValue"),t(),e(62," para devolver datos mock, "),n(63,"code"),e(64,"callFake"),t(),e(65," para l\xF3gica personalizada y "),n(66,"code"),e(67,"toHaveBeenCalledWith"),t(),e(68," para verificar argumentos. "),t(),n(69,"pre")(70,"code"),e(71,`it('should call service on init', () => {
  const service = TestBed.inject(ProductService);
  spyOn(service, 'getAll').and.returnValue(of(mockProducts));
  component.ngOnInit();
  expect(service.getAll).toHaveBeenCalled();
});`),t()()(),n(72,"div",5)(73,"h3"),e(74,"4. MockStore (NgRx)"),t(),n(75,"p")(76,"code"),e(77,"provideMockStore"),t(),e(78," crea un store falso para tests. Usa "),n(79,"code"),e(80,"overrideSelector"),t(),e(81," para definir valores de selectores y "),n(82,"code"),e(83,"setState"),t(),e(84," para cambiar el estado completo. "),t(),n(85,"pre")(86,"code"),e(87,`beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [AutoGlossaryDirective, ProductListComponent],
    providers: [
      provideMockStore({
        selectors: [
          { selector: selectAllProducts, value: mockProducts },
          { selector: selectLoading, value: false },
        ]
      })
    ]
  });
  store = TestBed.inject(MockStore);
});`),t()(),n(88,"div",2),e(89," \u{1F4C2} Pendiente de implementar \u2014 consulta el ejercicio en la pesta\xF1a Lab \u{1F9EA} "),t()(),n(90,"div",6)(91,"h3"),e(92,"5. HttpTestingController"),t(),n(93,"p"),e(94," Permite testear llamadas HTTP sin un servidor real. Intercepta requests con "),n(95,"code"),e(96,"expectOne"),t(),e(97,", verifica m\xE9todo y URL, y responde con "),n(98,"code"),e(99,"flush"),t(),e(100,". "),t(),n(101,"pre")(102,"code"),e(103,`it('should fetch products', () => {
  service.getProducts().subscribe(products => {
    expect(products.length).toBe(2);
  });
  const req = httpMock.expectOne('/api/products');
  expect(req.request.method).toBe('GET');
  req.flush(mockProducts);
});`),t()()(),n(104,"div",7)(105,"h3"),e(106,"6. Marble Testing"),t(),n(107,"p"),e(108," Los diagramas marble representan flujos RxJS como strings ASCII. Cada "),n(109,"code"),e(110,"-"),t(),e(111," = 10ms, letras = emisiones, "),n(112,"code"),e(113,"|"),t(),e(114," = complete, "),n(115,"code"),e(116,"#"),t(),e(117," = error. "),t(),n(118,"pre")(119,"code"),e(120,`// Diagrama: --a--b--c|
// - = 10ms, a/b/c = emisiones, | = complete
it('should map values', () => {
  const source = cold('--a--b--c|', { a: 1, b: 2, c: 3 });
  const expected = '--x--y--z|';
  const result = source.pipe(map(v => v * 10));
  expectObservable(result).toBe(expected, { x: 10, y: 20, z: 30 });
});`),t()()()())},styles:["[_nghost-%COMP%]{display:block;padding:1rem 0}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.2rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .6rem;font-size:1.1rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:6px;padding:.8rem;overflow-x:auto;font-size:.85rem;line-height:1.5}code[_ngcontent-%COMP%]{color:var(--text)}"]})};export{m as TestingLearnComponent};
