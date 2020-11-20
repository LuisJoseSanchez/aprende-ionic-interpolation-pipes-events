import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Example07Page } from './example07.page';

describe('Example07Page', () => {
  let component: Example07Page;
  let fixture: ComponentFixture<Example07Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Example07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
