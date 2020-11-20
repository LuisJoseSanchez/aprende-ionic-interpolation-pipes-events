import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Example03Page } from './example03.page';

describe('Example03Page', () => {
  let component: Example03Page;
  let fixture: ComponentFixture<Example03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Example03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
