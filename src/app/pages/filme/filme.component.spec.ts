import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Filme } from 'src/app/interfaces/filme.interface';
import { FilmeService } from 'src/app/services/filme.service';
import { FilmeComponent } from './filme.component';

const mockFilmes: Filme[] = [
  {
    nomeFilme: 'Toy Story',
    nomeDiretor: 'John Lasseter',
    anoLancamento: 2001
  },
  {
    nomeFilme: 'Shrek',
    nomeDiretor: 'Andrew Adamson, Vicky Jenson',
    anoLancamento: 2001
  },
  {
    nomeFilme: 'Ratatouille',
    nomeDiretor: 'Brad Bird',
    anoLancamento: 2007
  },
]

fdescribe('FilmeComponent', () => {
  let component: FilmeComponent;
  let fixture: ComponentFixture<FilmeComponent>;
  let filmeService: FilmeService;

  class MockFilmeService {
    filmes: Filme[] = mockFilmes;
    
    obterFilmes(): Filme[] {
      return this.filmes;
    }

    salvarFilme(filme: Filme): void {
      this.filmes.push(filme);
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmeComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: FilmeService, useClass: MockFilmeService }
      ]
    })
      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    filmeService = TestBed.inject(FilmeService);
  });

  const preecherForumularioExemplo = () => {
    const inputNomeFilme: HTMLInputElement = fixture.debugElement.query(By.css("input[formcontrolname='nomeFilme']")).nativeElement;
    const inputAnoLancamento: HTMLInputElement = fixture.debugElement.query(By.css("input[formcontrolname='anoLancamento']")).nativeElement;
    const inputNomeDiretor: HTMLInputElement = fixture.debugElement.query(By.css("input[formcontrolname='nomeDiretor']")).nativeElement;

    inputNomeFilme.value = 'Tron: O Legado';
    inputNomeFilme.dispatchEvent(new Event('input'));

    inputAnoLancamento.value = '2010';
    inputAnoLancamento.dispatchEvent(new Event('input'));

    inputNomeDiretor.value = 'Joseph Kosinski';
    inputNomeDiretor.dispatchEvent(new Event('input'));
  }

  it('deve criar o component', () => {
    expect(component).toBeTruthy();
  });

  it('deve obter os filmes ao executar o ngOnInit', () => {
    spyOn(filmeService, 'obterFilmes').and.callThrough();
    component.ngOnInit();
    expect(filmeService.obterFilmes).toHaveBeenCalled();
    expect(component.filmes).toEqual(mockFilmes);
  });

  it('deve preencher o formulário', () => {
    preecherForumularioExemplo();
    expect(component.filmeForm.controls.nomeFilme.value).toBe('Tron: O Legado');
    expect(component.filmeForm.controls.anoLancamento.value).toBe(2010);
    expect(component.filmeForm.controls.nomeDiretor.value).toBe('Joseph Kosinski');
  });

  it('deve salvar um filme e verificar se o mesmo é mostrado na tabela', () => {
    spyOn(component, 'salvarFilme').and.callThrough();
    preecherForumularioExemplo();
    fixture.detectChanges();
    const btnSalvar: HTMLButtonElement = fixture.debugElement.query(By.css("button")).nativeElement;
    btnSalvar.click();
    btnSalvar.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    const tabela: HTMLTableElement = fixture.debugElement.query(By.css("table")).nativeElement;
    expect(tabela.rows.item(4)?.cells.item(0)?.textContent).toEqual('Tron: O Legado');
    expect(tabela.rows.item(4)?.cells.item(1)?.textContent).toEqual('Joseph Kosinski');
    expect(tabela.rows.item(4)?.cells.item(2)?.textContent).toEqual('2010');
    expect(component.salvarFilme).toHaveBeenCalled();
  });
});
