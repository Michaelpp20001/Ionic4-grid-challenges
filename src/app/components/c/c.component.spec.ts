import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CComponent } from './c.component';

describe('CComponent', () => {
  let component: CComponent;
  let fixture: ComponentFixture<CComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
