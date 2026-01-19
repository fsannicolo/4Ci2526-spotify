import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artist } from './artist';

describe('Artist', () => {
  let component: Artist;
  let fixture: ComponentFixture<Artist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Artist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
