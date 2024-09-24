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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Has title Inscriptcio proves athletisme', () => {
    expect(compiled.querySelector("h1")?.textContent).toBe("Inscriptcio proves athletisme");
  });

  it('Has title Dades identificatives,DNI, Codi del federat,Nom i Cognoms,Telèfon,Email', () => {
    expect(compiled.querySelector("h1")?.textContent).toBe("Dades identificatives");
    expect(getNthLabel(0).textContent).toBe("DNI:");
    expect(getNthLabel(1).textContent).toBe("Codi del federat:");
    expect(getNthLabel(2).textContent).toBe("Nom i Cognoms:");
    expect(getNthLabel(3).textContent).toBe("Telèfon:");
    expect(getNthLabel(4).textContent).toBe("Email:");
  });

  it('Has input of type text for Dades identificatives,DNI, Codi del federat,Nom i Cognoms,Telèfon,Email', () => {
    expect(getInputFromLabel(0)!.getAttribute("type")).toBe("text");
    expect(getInputFromLabel(1)!.getAttribute("type")).toBe("text");
    expect(getInputFromLabel(2)!.getAttribute("type")).toBe("text");
    expect(getInputFromLabel(3)!.getAttribute("type")).toBe("text");
    const inputUserName:HTMLInputElement|null = getInputFromLabel(4);
    expect(inputUserName!.getAttribute("type")).toBe("email");
  });
  
  
});
