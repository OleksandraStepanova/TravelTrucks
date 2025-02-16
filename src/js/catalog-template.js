export function catalogTemplate() {
  return `
            <div id="catalog" class="section-catalog">
              <section class="filters">
                <form id="filtersForm" class="form-filters">
                  <label for="location" class="text-filters">Location</label>
                  <input id="location" name="location" class="location-filters" type="text" placeholder="Kyiv">
                  <p class="name-filters">Filters</p>
                  <h3 class="title-filters">Vehicle equipment</h3>
                  <div class="list-filters">
                    <div id="AC" class="container-filters">
                      <img src="./src/img/wind.svg" width="32" alt="wind">
                      <p>AC</p>
                    </div>
                    <div id="transmission" class="container-filters">
                      <img src="./src/img/diagram.svg" width="32" alt="diagram">
                      <p>Automatic</p>
                    </div>
                    <div id="kitchen" class="container-filters">
                      <img src="./src/img/cup-hot.svg" width="32" alt="cup">
                      <p>Kitchen</p>
                    </div>
                    <div id="TV" class="container-filters">
                      <img src="./src/img/tv.svg" width="32" height="32" alt="TV">
                      <p>TV</p>
                    </div>
                    <div id="bathroom" class="container-filters">
                      <img src="./src/img/bi_droplet.svg" width="32" alt="droplet">
                      <p>Bathroom</p>
                    </div>
                  </div>
                  <label class="title-filters">Vehicle type</label>
                  <div class="list-filters">
                    <input type="radio" id="panelTruck" name="vehicleType" value="panelTruck">
                    <label class="container-filters-radio" for="panelTruck">
                      <img src="./src/img/van.svg" alt="van">
                      <p>Van</p>
                    </label>
                    <input type="radio" id="fullyIntegrated" name="vehicleType" value="fullyIntegrated">
                    <label class="container-filters-radio" for="fullyIntegrated">
                      <img src="./src/img/fully.svg" alt="fullyIntegrated">
                      <p>Fully Integrated</p>
                    </label>
                    <input type="radio" id="alcove" name="vehicleType" value="alcove">
                    <label class="container-filters-radio" for="alcove">
                      <img src="./src/img/alcove.svg" alt="alcove">
                      <p>Alcove</p>
                    </label>
                  </div>
                  <button type="submit" class="button-filters">Search</button>
                </form>
              </section>
              <section class="campers">
                <ul class="result"></ul>
                <span class="loader">Loading...</span>
                <button class="load-more">Load more</button>
                <div class="modal">
                  <div class="modal-content"></div>
                </div>
              </section>
            </div>
          `;
}
