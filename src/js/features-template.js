import { getCampersById } from './api.js';
import { formTemplate } from './form-template.js';

export async function featuresTemplate(camperId) {
  const camper = await getCampersById(camperId);
  const form = formTemplate();

  return `<section class='features'>
            ${
              camper
                ? `<div>
                <div class='info-feature'>
                    <ul class="characteristics-list">
                      <li class="characteristics-item">
                          <img src='diagram.svg' alt="diagram" />
                          <p class='characteristics'>${camper.transmission}</p>
                      </li>
                      <li class='characteristics-item'>
                          <img src='fuel-pump.svg' alt="fuel" />
                          <p class='characteristics'>${camper.engine}</p>
                      </li>                        
                      ${
                        camper.kitchen
                          ? `
                      <li class='characteristics-item'>
                          <img src='cup-hot.svg' alt="kitchen" />
                          <p class='characteristics'>Kitchen</p>
                      </li>`
                          : ''
                      }
                      
                      ${
                        camper.AC
                          ? `
                      <li class='characteristics-item'>
                          <img src='wind.svg' alt="AC" />
                          <p class='characteristics'>AC</p>
                      </li>`
                          : ''
                      }
                      
                      ${
                        camper.bathroom
                          ? `
                      <li class='characteristics-item'>
                          <img src='bi_droplet.svg' alt="droplet" />
                          <p class='characteristics'>Bathroom</p>
                      </li>`
                          : ''
                      }
                      
                      ${
                        camper.radio
                          ? `
                      <li class='characteristics-item'>
                          <img src='ui-radios.svg' alt="radio" />
                          <p class='characteristics'>Radio</p>
                      </li>`
                          : ''
                      }
                       ${
                         camper.TV
                           ? `
                      <li class='characteristics-item'>
                          <img src='tv.svg' alt="tv" />
                          <p class='characteristics'>TV</p>
                      </li>`
                           : ''
                       }
                  </ul>  
                    <h3 class='details-feature'>Vehicle details</h3>
                    <ul class='details-list'>
                        <li class='details-item'>
                            <p class='item-feature'>Form</p>
                            <p class='item-feature'>${camper.form}</p>
                        </li>
                        <li class='details-item'>
                            <p class='item-feature'>Length</p>
                            <p class='item-feature'>${camper.length}</p>
                        </li>
                        <li class='details-item'>
                            <p class='item-feature'>Width</p>
                            <p class='item-feature'>${camper.width}</p>
                        </li>
                        <li class='details-item'>
                            <p class='item-feature'>Height</p>
                            <p class='item-feature'>${camper.height}</p>
                        </li>
                        <li class='details-item'>
                            <p class='item-feature'>Tank</p>
                            <p class='item-feature'>${camper.tank}</p>
                        </li>                        
                        <li class='details-item'>
                            <p class='item-feature'>Consumption</p>
                            <p class='item-feature'>${camper.consumption}</p>
                        </li>
                    </ul>
                </div>
            </div>`
                : ''
            } 
            
        ${form}
        </section>`;
}
