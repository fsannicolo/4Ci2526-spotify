import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsGrid } from './albums-grid';

describe('AlbumsGrid', () => {
  let component: AlbumsGrid;
  let fixture: ComponentFixture<AlbumsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
