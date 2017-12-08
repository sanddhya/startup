var homePageController = startupSmb.controller('homePageController', ['$scope', '$uibModal', '$stateParams', 'serviceForApiCall',
    function ($scope, $uibModal, $stateParams, serviceForApiCall) {


        var userId = $stateParams.id;
        if (userId) {
            serviceForApiCall.sendEvent('landed', userId);
            fbq('track', 'landed');
        }

        $scope.initSurvey = function () {
            if (userId) {
                serviceForApiCall.sendEvent('started survey', userId);
                fbq('track', 'started survey');
            }
            if (mobilecheck() || window.innerWidth <= 1024) {
                $scope.startSurvey = true;
                window.scrollTo(0, 0);
            }
            else {
                $uibModal.open({
                    templateUrl: 'videoModal.html',
                    controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
                        $scope.close = function () {
                            $uibModalInstance.close();
                        }
                    }],
                    backdrop: 'static',
                    windowClass: "videoModal",
                    resolve: {}
                }).result.then(function (data) {

                });
            }

        }

        function mobilecheck() {
            var check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };


        $scope.profiles = [
            {
                "name": "Small Business Owner in Retail and Online",
                "icon": "Small Business ownerimage.png",
                "desc": "Mike owns a small brick-and-mortar store and sells online. He is not technology shy and is looking for solutions to scale his business",
                "questions": [
                    "How do I get discovered and grow more customers – offline & online?",
                    "How do I reduce complexity of managing multiple ECom marketplaces? Can I sell globally?",
                    "How do I reduce my shipping costs and manage returns?"
                ],
                "similarProfiles": [
                    "Fashion boutiques & retailers",
                    "Small sized traders and exporters"
                ]
            },
            {
                "name": "Small Professional services firm",
                "icon": "Small professional services firm image.png",
                "desc": "Flourishing services business with 1-2 owners & 3-4 support staff. Looking for solutions to enhance productivity & manage practice better",
                "questions": [
                    "How do I manage my practice better? Appointment management, scheduling and payments",
                    "Do I know my customers well enough? How do I grow them?",
                    "Which solutions can I use to manage my documents and increase productivity"
                ],
                "similarProfiles": [
                    "Accounting, & Legal firms",
                    "Healthcare Professionals",
                    "Small Consulting firms"
                ]
            },
            {
                "name": "Mid-sized manufacturers",
                "icon": "mid sized manufacturer image.png",
                "desc": "Directors/ department heads of mid-sized manufacturing company. Looking for more customer insights to manage his relationships better",
                "questions": [
                    "Which are the tools to enhance my customer insights and manage relationships",
                    "How can I manage my documents securely and reduce shipping costs",
                    "How do I improve my business productivity?"
                ],
                "similarProfiles": [
                    "Small sized real-estate, manufacturing",
                    "Distributors"
                ]
            },
            {
                "name": "Small hyperlocal food delivery business",
                "icon": "Small Hyperlocal image.png",
                "desc": "Ben is an owner of a popular local Pizzeria. His sales are predominantly offline with a growing online delivery business",
                "questions": [
                    "How do I get discovered locally and target my customers?",
                    "How can I scale my delivery business?",
                    "What can I do to reduce my costs and drive more efficiency?"
                ],
                "similarProfiles": [
                    "Small food outlets",
                    "Local service businesses: laundry, groceries & home services"
                ]
            }
        ]


        $(document).ready(function () {

            $(".single-item").slick();
            $(".contextCarousal").slick({
                autoplay: true,
                autoplaySpeed: 1500,
                dots: true,
                arrows: false
            });

            $(".single-item2").slick({
                autoplay: false,
                autoplaySpeed: 1000
            });

            $('.multiple-items').slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 5

            });

        });

    }]);