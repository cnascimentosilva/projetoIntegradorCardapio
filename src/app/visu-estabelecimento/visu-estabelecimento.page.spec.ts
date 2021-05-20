import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisuEstabelecimentoPage } from './visu-estabelecimento.page';

describe('VisuEstabelecimentoPage', () => {
  let component: VisuEstabelecimentoPage;
  let fixture: ComponentFixture<VisuEstabelecimentoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisuEstabelecimentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisuEstabelecimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
