function contactForm() {

   //Create vars
   var $form = $('#form'),
      $this = $(this),
      $formTrigger = $('.form-trigger'),
      $carDetails = $('.car-details'),
      $fieldWrapInner = $('.field-wrap-inner'),
      $addMoreBtn = $('.add-more-btn'),
      $removeBtn = $('.remove-btn'),
      $toggleReg = $('.toggleReg'),
      $datepickerOptions = {
         changeMonth: true,
         changeYear: true,
         yearRange: "1900:2030",
         dateFormat: "dd-mm-yy"
      }

   // Add Datepicker
   $('.datepicker').datepicker($datepickerOptions);

   // Add stuff
   $addMoreBtn.on('click', function() {

      // vars declared inside function so they are calculated with each click
      var $core = $('.core'),
         $coreIncrement = $core.length + 1

      // On click clone .core and preserve events (.clone( [withDataAndEvents ], [ deepWithDataAndEvents ] ))
      $core.eq(0).clone(true, true).appendTo($fieldWrapInner).addClass('newCar').find('input').val('').removeAttr('id').each(function() {
         // And add incremental value to name attribute - e.g. car1, car2 etc
         this.name = this.name.replace(/\d+/, $coreIncrement);

      });

      $('.datepicker:last').addClass('yoyoyooyoyo').datepicker('destroy').datepicker();

      // num = parseInt($(".newCar h2 span").text());
      // $(".newCar h2 span").text(num+1);

      // Invoke checkIfNewCar function
      checkIfNewCar();
   });

   $this.find('datepicker').datepicker('destroy').datepicker();

   // "I don't know my reg number" change text and toggle questions above and below
   $toggleReg.on('click', function() {
      $this = $(this);
      $this.text() == $this.data("text-swap") ?
         $this.text($this.data("text-original")) :
         $this.text($this.data("text-swap"));

      $this.parent().find('.registration').slideToggle('100')
         .find('input').toggleClass('required');

      $this.parent().find('.toggle-cars').slideToggle()
         .find('input').toggleClass('required');
   });

   // Remove last occurance of .newCar and .newDate when button clicked
   $removeBtn.on('click', function() {
      $(this).parents($form).children($fieldWrapInner).find('.newCar:last').remove();

      // Invoke checkIfNewCar function
      checkIfNewCar();
   });

   // Check for .newCar and show remove button if .newCar exists else hide
   function checkIfNewCar() {
      if ($('.newCar').length) {
         $removeBtn.show();
      } else {
         $removeBtn.hide();
      }
   }

   // // Enable jQuery UI datepicker on focus
   // $('datepicker_multi').on('click', function() {
   //    $this.datepicker({
   //       changeMonth: true,
   //       changeYear: true,
   //       yearRange: "1900:2030",
   //       dateFormat: "dd-mm-yy"
   //    });
   // });

   // Add form validation
   // https://jqueryvalidation.org/
   // $form.validate({
   //    rules: {
   //       email: {
   //          required: true,
   //          email: true
   //       }
   //    }
   // });
}
contactForm();