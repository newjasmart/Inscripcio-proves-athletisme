import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptcioComponent } from './inscriptcio.component';

describe('InscriptcioComponent', () => {
  let component: InscriptcioComponent;
  let fixture: ComponentFixture<InscriptcioComponent>;
  let compiled: HTMLElement;

  function getNthLabel(index:number) {
    return compiled.querySelectorAll("label")[index];
  }

  function getInputFromLabel(labelIndex:number) {
    return getNthLabel(labelIndex)!.querySelector("input");
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptcioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptcioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled=fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Has title Inscriptcio proves athletisme', () => {
    expect(compiled.querySelector("h1")?.textContent).toBe("Inscriptcio proves athletisme");
  });

  it('Has title Dades identificatives,DNI, Codi del federat,Nom i Cognoms,Telèfon,Email', () => {
    expect(compiled.querySelector("h1")?.textContent).toBe("Inscriptcio proves athletisme");
    expect(getNthLabel(0).textContent).toBe("DNI: ");
    expect(getNthLabel(1).textContent).toBe("Codi de federat: ");
    expect(getNthLabel(2).textContent).toBe("Nom i cognoms: ");
    expect(getNthLabel(3).textContent).toBe("Telefon: ");
    expect(getNthLabel(4).textContent).toBe("Email: ");
  });

  it('Has input of type text for Dades identificatives,DNI, Codi del federat,Nom i Cognoms,Telèfon,Email', () => {
    expect(getInputFromLabel(0)!.type).toBe("text");
    expect(getInputFromLabel(1)!.type).toBe("text");
    expect(getInputFromLabel(2)!.type).toBe("text");
    expect(getInputFromLabel(3)!.type).toBe("text");
    expect(getInputFromLabel(4)!.type).toBe("email");
   
  });
  
  it('Has title Inscripcio,100 llisos, 200 llisos,400 llisos,800 llisos,1000 llisos', () => {
    expect(compiled.querySelector("h1")?.textContent).toBe("Inscriptcio ");
    expect(getNthLabel(5).textContent).toBe("100 llisos: ");
    expect(getNthLabel(6).textContent).toBe("200 llisos: ");
    expect(getNthLabel(7).textContent).toBe("400 llisos: ");
    expect(getNthLabel(8).textContent).toBe("800 llisos: ");
    expect(getNthLabel(9).textContent).toBe("1000 llisos: ");
  });
});
