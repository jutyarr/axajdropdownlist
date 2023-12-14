<script>
    $(document).ready(function () {
        $('#country').attr('disabled', true);
        $('#state').attr('disabled', true);

        loadCountries();

        function loadCountries() {
            $('#country').empty();
            $.ajax({
                url: '?handler=Years',
                success: function (resp) {
                    console.log(resp)
                    if (resp != null && resp != undefined && resp.length > 0) {
                        $('#country').attr('disabled', false);
                        $('#country').append('<option>--Select a country--</option>');
                        $('state').append('<option>--select a state</option>');
                        $.each(resp, function (i, data) {

                            console.log(data.id)
                            $('#country').append('<option value=' + data.id + '>' + data.name + '</option>')
                        })
                    }
                    else {
                        $('country').attr('disabled', true);
                        $('state').attr('disabled', true);

                    }
                },
                error: function (error) {
                    alert(error)
                }
            });

        }


        $('#country').on('change', function () {
            let id = $(this).val();
            $('#state').empty();
            $.ajax({
                url: '?handler=months&id=' + id.toString(),
                success: function (resp) {
                    if (resp != null && resp != undefined && resp.length > 0) {
                        $('#state').attr('disabled', false);
                        $('#state').append('<option>--select a state</option>');
                        $.each(resp, function (i, data) {

                            console.log(data.id)
                            $('#state').append('<option value=' + data.id + '>' + data.name + '</option>')
                        })
                    }

                    else {
                        $('state').attr('disabled', true);
                    }
                },

                error: function (error) {
                    alert(error)
                }
            });
        });
    
    });

    

</script>
