// import datepicker from 'js-datepicker';
import 'izitoast/dist/css/iziToast.min.css';

export function formTemplate() {
  //   const picker = datepicker('.some-input', { showAllDates: true });

  return `
   <div class="form-container">
        <h2 class='title-form'>Book your campervan now</h2>
        <p class='text-form'>Stay connected! We are always ready to help you.</p>
        <form id="bookingForm" class="form-bookings">
            <div>    
                <input class='input-bookings' type="text" id="name" name="name" required minlength="3" maxlength="50" placeholder="Name*" />
            </div>
            <div>    
                <input class='input-bookings' type="email" id="email" name="email" required placeholder="Email*" />
             </div>
             <div>
                <input class='input-bookings' type="date" id="bookingDate" name="bookingDate" required />
            </div>
            <div>    
                <textarea class='comment-bookings' id="comment" name="comment" maxlength="250" placeholder="Comment"></textarea>
            </div>
            <button class='button-bookings' type="submit">Send</button>
        </form>
        
      <div id="toast"></div>     
   </div>`;
}
