import { getCampersById } from './api.js';
import { formTemplate } from './form-template.js';

export async function reviewsTemplate(camperId) {
  const camper = await getCampersById(camperId);
  const form = formTemplate();

  return ` <section class='section-reviews'>
            ${
              camper
                ? `<ul class='reviews-list'>
                ${camper.reviews
                  .map(
                    review => `<li key=${
                      review.reviewer_name
                    } class='reviews-item'>
                    <div class='info-reviews'>
                        <div class='ava-reviews'>${review.reviewer_name}</div>
                        <div class='rating-reviews'>
                            <p class='name-reviews'>${review.reviewer_name}</p>
                            <div class='rating-stars'>
                             ${Array.from(
                               { length: review.reviewer_rating },
                               () => `
                              <img src='star.svg' alt='star' />
                            `
                             ).join('')}
                            <div/>                                                
                        </div>
                    </div>  
                    <p class='comment-reviews'>${review.comment}</p>
                    </li>`
                  )
                  .join('')}             
            </ul>`
                : ''
            }
          ${form}
        </section>`;
}
