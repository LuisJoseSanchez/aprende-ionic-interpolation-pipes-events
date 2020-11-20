import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Example06Page } from './example06.page';

describe('Example06Page', () => {
  let component: Example06Page;
  let fixture: ComponentFixture<Example06Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example06Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Example06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
