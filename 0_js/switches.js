$(document).ready(function(){
  $('.switch-input').change(function(){
    var checked = $(this).prop('checked');
    var section = $(this).parent().siblings('.sub-form');
    if (checked) {
      section.css("display", "block");
    } else {
      section.css("display", "none");
    }
  })

  $('.sub-form-select').prop('selectedIndex', -1);
  $('.sub-form-select').change(function(){
    var choice = $(this).find(":selected").index();
    var $section = $($(this).siblings(".sub-form")[choice]);
    $(this).siblings(".sub-form").css("display", "none");
    $section.css("display", "block");
  })

  $('.add-item').click(function(){
    var template = $(this).data('template');
    $(this).siblings('.items').append(template);
  })
})