<script>
        $('#btnPostalCodeSearch').on('click', function (event) {
            if ($("#suburbPostalForm").valid()) {
                //$("#PostalCodeTblBody").html("");
                $.ajax({
                    url: "GetPostalCodeSuburb/",
                    type: 'GET',
                    data: { code: $("#postalCodeModalTextBox").val() },
                    dataType: 'json',
                    success: function (PostalCodesList) {
                        for (i = 0; i < PostalCodesList.postalCodesList.length; i++) {                            
                            var x =
                                '<tr>' +
                                '<td class="align-middle">' +
                                '<div class="custom-control custom-radio">' +
                                '<input type="radio" id="' + PostalCodesList.postalCodesList[i].postalCodeID + '" class="custom-control-input" name="postalCodeRadio" value="' + PostalCodesList.postalCodesList[i].name + '" onclick="GetPostalCode(' + JSON.stringify(PostalCodesList.postalCodesList[i].name).replace(/"/g, '&quot;') + ',' + PostalCodesList.postalCodesList[i].postalCode + ');">' +
                                '<label class="custom-control-label" for="' + PostalCodesList.postalCodesList[i].postalCodeID + '"></label>' +
                                '</div>' +
                                '</td>' +
                                '<td class="align-middle">' +
                                '<a class="d-flex align-items-center">' +
                                '<div class="ml-3">' +
                                '<span class="d-block h5 text-hover-primary mb-0">' + PostalCodesList.postalCodesList[i].name + '</span>' +
                                '</div>' +
                                '</a>' +
                                '</td>' +
                                '<td class="align-middle">' +
                                '<a class="d-flex align-items-center">' +
                                '<div class="ml-3">' +
                                '<span class="d-block h5 text-hover-primary mb-0">' + PostalCodesList.postalCodesList[i].suburb + '</span>' +
                                '</div>' +
                                '</a>' +
                                '</td>' +
                                '<td class="align-middle">' +
                                '<a class="d-flex align-items-center">' +
                                '<div class="ml-3">' +
                                '<span class="d-block h5 text-hover-primary mb-0">' + PostalCodesList.postalCodesList[i].postalCode + '</span>' +
                                '</div>' +
                                '</a>' +
                                '</td>' +
                                '<td class="align-middle">' +
                                '<a class="d-flex align-items-center">' +
                                '<div class="ml-3">' +
                                '<span class="d-block h5 text-hover-primary mb-0">' + PostalCodesList.postalCodesList[i].branchCode + '</span>' +
                                '</div>' +
                                '</a>' +
                                '</td>' +
                                '</tr>'

                            $("#PostalCodeTblBody").append(x);
                        }
                    }
                });
                event.preventDefault();
                event.returnValue = false;
            }
        });
    </script>
