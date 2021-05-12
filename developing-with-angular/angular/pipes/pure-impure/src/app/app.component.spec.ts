import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { PublicPostsPipe } from './pipes/public-posts.pipe';
import { PublicPostsImpurePipe } from './pipes/public-posts-impure.pipe';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [AppComponent, PublicPostsPipe, PublicPostsImpurePipe]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
