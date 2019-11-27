import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BComponent } from './b.component';

describe('BComponent', () => {
  let component: BComponent;
  let fixture: ComponentFixture<BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
