import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBooksComponentComponent } from './search-books-component.component';

describe('SearchBooksComponentComponent', () => {
  let component: SearchBooksComponentComponent;
  let fixture: ComponentFixture<SearchBooksComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBooksComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBooksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
