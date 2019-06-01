import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchChampComponent } from './search-champ.component';

describe('SearchChampComponent', () => {
  let component: SearchChampComponent;
  let fixture: ComponentFixture<SearchChampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchChampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchChampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
