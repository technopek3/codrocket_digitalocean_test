(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./src/locales/en.json":
/*!*****************************!*\
  !*** ./src/locales/en.json ***!
  \*****************************/
/*! exports provided: status, messages, layout, common, home, auth, marketplace, all_deliverers, deliverer_profile, marchent_dashboard, deliverer_dashboard, feedback, admin, footer, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"status\\\":{\\\"return_status\\\":\\\"Return status\\\",\\\"payment_status\\\":\\\"payment status\\\",\\\"confirmation_status\\\":\\\"confirmation status\\\",\\\"delivery_status\\\":\\\"delivery status\\\",\\\"self_status\\\":\\\"self status\\\",\\\"pending\\\":\\\"pending\\\",\\\"confirmed\\\":\\\"confirmed\\\",\\\"no_answer\\\":\\\"no_answer\\\",\\\"after\\\":\\\"after\\\",\\\"canceled\\\":\\\"canceled\\\",\\\"processed\\\":\\\"processed\\\",\\\"dispatched\\\":\\\"dispatched\\\",\\\"received\\\":\\\"received\\\",\\\"hold\\\":\\\"hold\\\",\\\"problem\\\":\\\"problem\\\",\\\"refused\\\":\\\"refused\\\",\\\"delivered\\\":\\\"delivered\\\",\\\"unpaid\\\":\\\"unpaid\\\",\\\"paid\\\":\\\"paid\\\",\\\"returned\\\":\\\"returned\\\",\\\"in_stock\\\":\\\"in_stock\\\",\\\"not_sent\\\":\\\"not_sent\\\",\\\"sent\\\":\\\"sent\\\",\\\"accepted\\\":\\\"accepted\\\",\\\"created\\\":\\\"created\\\",\\\"at\\\":\\\"at\\\"},\\\"messages\\\":{\\\"server_error\\\":\\\"Server error !!\\\",\\\"choose_image\\\":\\\"Choose image\\\",\\\"drag_file\\\":\\\"Drag file here ..\\\",\\\"loading\\\":\\\"Loading ...\\\",\\\"error\\\":\\\"Error!\\\",\\\"no_data\\\":\\\"No data\\\",\\\"no_result\\\":\\\"No result found\\\",\\\"no_reviews\\\":\\\"No reviews\\\",\\\"not_found\\\":\\\"Sorry! The page you were looking for doesn't exist.\\\",\\\"no_products\\\":\\\"No products !\\\",\\\"no_warehouses\\\":\\\"No warehouses\\\",\\\"no_delivery\\\":\\\"No delivery locations !\\\",\\\"no_notif\\\":\\\"No notifications !\\\",\\\"no_similar\\\":\\\"no similar profiles\\\",\\\"please_confirm\\\":\\\"Please confirm\\\",\\\"no_variants\\\":\\\"No variants\\\",\\\"no_categories\\\":\\\"No categories\\\",\\\"no_product_selected\\\":\\\"No Product Selected\\\",\\\"no_note\\\":\\\"No note\\\",\\\"are_you_sure\\\":\\\"Are you sure ?\\\",\\\"region_not_selected\\\":\\\"Region not selected\\\",\\\"invalid_phone\\\":\\\"Invalid phone number\\\",\\\"select_region\\\":\\\"Please select region\\\",\\\"form_errors\\\":\\\"Some fields needs to be filled\\\",\\\"no_products_in_warehouse\\\":\\\"No product in this warehouse\\\",\\\"invalid_data\\\":\\\"Invalid data\\\",\\\"automaticly_acccept_request\\\":\\\"This company is not manageable, so your partnership request to :name will be accepted automatically, if you have a different rate than the public rates, you can modify it and it will be applied to your requests.\\\",\\\"select_one\\\":\\\"select a least one warehouse\\\",\\\"requests_and_offers\\\":\\\"requests and Offers\\\",\\\"got_it\\\":\\\"Got it\\\",\\\"send_multiple_auto_accept_order_alert\\\":\\\"Some selected companies is not in COD Rocket platform, they will not receive your orders, all orders will be accepted automatically.\\\",\\\"send_single_auto_accept_order_alert\\\":\\\"This company is not in COD Rocket platform, they will not receive your orders, all orders will be accepted automatically.\\\",\\\"one_order_selected\\\":\\\"one order selected\\\",\\\"multiple_order_selected_must_have_same_statues\\\":\\\"Orders selected must have same status\\\",\\\"mesages_confirm_delete_product\\\":\\\"If you delete this product, all quantities from your home warehouse and other delivery warehouses will be delete including product variantes, all data will be removed from our database and this action cannot be undone, click 'OK' to force delete all data.\\\",\\\"no_users\\\":\\\"No users\\\",\\\"select_city\\\":\\\"please select a city and a deliverer\\\",\\\"city_no_supported\\\":\\\"the selected deliverer cannot deliver to the costumer city\\\",\\\"select_regions\\\":\\\"Select regions\\\",\\\"not_in_platform\\\":\\\"You cannot send a message to this delivery company, because it is not on the COD Rocket platform.\\\",\\\"cannot_add_shipping\\\":\\\"You cannot add new shipping address for different customers, select the orders for the same customer or edit each order individually.\\\",\\\"cannot_edit_shipping\\\":\\\"You cannot change the shipping address of different customers, select the orders for the same customer or edit each order individually.\\\"},\\\"layout\\\":{\\\"menu\\\":{\\\"settings\\\":\\\"Settings\\\",\\\"logout\\\":\\\"Log out\\\",\\\"edit_profile\\\":\\\"Edit profile\\\",\\\"deliverers\\\":\\\"Deliverers\\\",\\\"start_trial\\\":\\\"Start Trial\\\",\\\"help\\\":\\\"Help\\\"},\\\"placeholders\\\":{\\\"email\\\":\\\"Entre your email\\\",\\\"new_password\\\":\\\"Entre new password\\\",\\\"confirm_password\\\":\\\"Confirm your password\\\",\\\"type_something\\\":\\\"Type something ..\\\",\\\"blank\\\":\\\"Leave blank if you don't want to change it\\\",\\\"pagination\\\":\\\"rows per page\\\",\\\"drop_file\\\":\\\"Drop file here...\\\",\\\"phone\\\":\\\"Phone number\\\",\\\"choose_address\\\":\\\"Choose Address\\\",\\\"countrySelectorLabel\\\":\\\"Country code\\\",\\\"countrySelectorError\\\":\\\"Choose a country\\\",\\\"example\\\":\\\"Exemple :\\\"},\\\"status\\\":{\\\"pending\\\":\\\"pending\\\",\\\"confirmed\\\":\\\"confirmed\\\",\\\"no_answer\\\":\\\"no answer\\\",\\\"after\\\":\\\"after\\\",\\\"canceled\\\":\\\"canceled\\\",\\\"processed\\\":\\\"processed\\\",\\\"dispatched\\\":\\\"dispatched\\\",\\\"received\\\":\\\"received\\\",\\\"hold\\\":\\\"hold\\\",\\\"problem\\\":\\\"problem\\\",\\\"refused\\\":\\\"refused\\\",\\\"delivered\\\":\\\"delivered\\\",\\\"unpaid\\\":\\\"unpaid\\\",\\\"paid\\\":\\\"paid\\\",\\\"returned\\\":\\\"returned\\\",\\\"in_stock\\\":\\\"in stock\\\",\\\"not_sent\\\":\\\"not sent\\\",\\\"sent\\\":\\\"sent\\\",\\\"accepted\\\":\\\"accepted\\\",\\\"warning\\\":\\\"warning\\\"},\\\"fields\\\":{\\\"search\\\":\\\"Search\\\",\\\"actions\\\":\\\"Actions\\\",\\\"username\\\":\\\"Username\\\",\\\"business_name\\\":\\\"Business name\\\",\\\"show_verification_info\\\":\\\"verification info\\\",\\\"email_or_username\\\":\\\"Email or business name\\\",\\\"stock_default\\\":\\\"Stock OR Default\\\",\\\"password\\\":\\\"Password\\\",\\\"new_password\\\":\\\"new password\\\",\\\"confirm_password\\\":\\\"Confirm password\\\",\\\"email\\\":\\\"Email\\\",\\\"by\\\":\\\"By\\\",\\\"of\\\":\\\"Of\\\",\\\"and\\\":\\\"and\\\",\\\"full_name\\\":\\\"Full name\\\",\\\"first_name\\\":\\\"First Name\\\",\\\"last_name\\\":\\\"Last name\\\",\\\"role\\\":\\\"Role\\\",\\\"gender\\\":\\\"Gender\\\",\\\"address\\\":\\\"Address\\\",\\\"phone\\\":\\\"Phone\\\",\\\"birthday\\\":\\\"Birthday\\\",\\\"avatar\\\":\\\"Profile image\\\",\\\"male\\\":\\\"Male\\\",\\\"female\\\":\\\"Female\\\",\\\"select\\\":\\\"Select ...\\\",\\\"is_active\\\":\\\"Is Active\\\",\\\"activation\\\":\\\"activation\\\",\\\"active\\\":\\\"Active\\\",\\\"inactive\\\":\\\"Inactive\\\",\\\"in_active\\\":\\\"Inactive\\\",\\\"country\\\":\\\"Country\\\",\\\"region\\\":\\\"Region\\\",\\\"city\\\":\\\"City\\\",\\\"cities\\\":\\\"Cities\\\",\\\"hour\\\":\\\"H :hours\\\",\\\"total\\\":\\\"Total\\\",\\\"message\\\":\\\"Message\\\",\\\"fees\\\":\\\"Fees\\\",\\\"new\\\":\\\"New\\\",\\\"mad\\\":\\\"MAD :sum\\\",\\\"status\\\":\\\"Status\\\",\\\"pending_for_verification\\\":\\\"Pending for verification\\\",\\\"archived\\\":\\\"Archived\\\",\\\"size\\\":\\\"Size\\\",\\\"color\\\":\\\"Color\\\",\\\"black\\\":\\\"Black\\\",\\\"red\\\":\\\"Red\\\",\\\"prices\\\":\\\"Prices\\\",\\\"note\\\":\\\"Note\\\",\\\"notes\\\":\\\"Notes\\\",\\\"name\\\":\\\"Name\\\",\\\"discount\\\":\\\"Discount\\\",\\\"tax\\\":\\\"Tax\\\",\\\"undefined\\\":\\\"Undefined\\\",\\\"shipping\\\":\\\"Shipping\\\",\\\"general\\\":\\\"General\\\",\\\"days_of_week\\\":[\\\"S\\\",\\\"M\\\",\\\"T\\\",\\\"W\\\",\\\"T\\\",\\\"F\\\",\\\"S\\\"],\\\"month_names\\\":[\\\"Jan\\\",\\\"Feb\\\",\\\"Mar\\\",\\\"Apr\\\",\\\"May\\\",\\\"Jun\\\",\\\"Jul\\\",\\\"Aug\\\",\\\"Sep\\\",\\\"Oct\\\",\\\"Nov\\\",\\\"Dec\\\"],\\\"default\\\":\\\"Default\\\",\\\"mixed_values\\\":\\\"Mixed values\\\",\\\"pending\\\":\\\"Pending...\\\",\\\"managable\\\":\\\"managable\\\",\\\"non_managable\\\":\\\"non managable\\\",\\\"managment\\\":\\\"managment\\\",\\\"price\\\":\\\"price\\\",\\\"quantity\\\":\\\"quantity\\\",\\\"add_new_address\\\":\\\"Add new address\\\",\\\"none\\\":\\\"none\\\",\\\"other_locations_for_this_delivry\\\":\\\"other locations by this delivry\\\"},\\\"reviews\\\":{\\\"one\\\":\\\"review :count\\\",\\\"two\\\":\\\"reviews :count\\\",\\\"few\\\":\\\"reviews :count\\\",\\\"many\\\":\\\"reviews :count\\\"},\\\"buttons\\\":{\\\"submit\\\":\\\"Submit\\\",\\\"cancel\\\":\\\"Cancel\\\",\\\"remove\\\":\\\"Remove\\\",\\\"update\\\":\\\"Update\\\",\\\"edit\\\":\\\"Edit\\\",\\\"close\\\":\\\"close\\\",\\\"back\\\":\\\"Back\\\",\\\"next\\\":\\\"Next\\\",\\\"prev\\\":\\\"Prev\\\",\\\"reset\\\":\\\"Reset\\\",\\\"save\\\":\\\"Save\\\",\\\"yes\\\":\\\"YES\\\",\\\"no\\\":\\\"NO\\\",\\\"apply\\\":\\\"Apply\\\",\\\"send\\\":\\\"Send\\\",\\\"resend\\\":\\\"Resend\\\",\\\"send_request\\\":\\\"Send Request\\\",\\\"send_feedback\\\":\\\"Send feedback\\\",\\\"waiting_response\\\":\\\"Waiting response\\\",\\\"only_for_merchants\\\":\\\"Only for merchants\\\",\\\"contact\\\":\\\"Contact\\\",\\\"partner\\\":\\\"Partner\\\",\\\"sort\\\":{\\\"label\\\":\\\"Sort by\\\",\\\"date\\\":\\\"Date\\\",\\\"rate\\\":\\\"Rate\\\"},\\\"view_more\\\":\\\"View more\\\",\\\"show\\\":\\\"Show\\\",\\\"hide\\\":\\\"Hide\\\",\\\"refuse\\\":\\\"Refuse\\\",\\\"accept\\\":\\\"Accept\\\",\\\"load_more\\\":\\\"Load more\\\",\\\"add\\\":\\\"Add\\\",\\\"categories\\\":\\\"Categories\\\",\\\"create\\\":\\\"Create\\\",\\\"types\\\":\\\"Types\\\",\\\"transfer\\\":\\\"Transfer\\\",\\\"reupload\\\":\\\"reupload\\\",\\\"confirm\\\":\\\"confirm\\\",\\\"delete\\\":\\\"Delete\\\"},\\\"messages\\\":{\\\"learnmoreabout\\\":\\\"Learn more about\\\"}},\\\"common\\\":{\\\"warehouse\\\":{\\\"title\\\":\\\"Warehouse\\\",\\\"locations\\\":\\\"Select locations\\\",\\\"add_location\\\":\\\"Add your delivery locations\\\",\\\"cancel_fees\\\":\\\"Cancel Fees\\\",\\\"delivery_fees\\\":\\\"Delivery Fees\\\",\\\"refused_fees\\\":\\\"Refused Fees\\\",\\\"packing_fees\\\":\\\"Packing Fees\\\",\\\"edit_fees\\\":\\\"Edit fees\\\",\\\"message\\\":{\\\"no_location_selected\\\":\\\"No locations selected in this warehouse\\\"},\\\"buttons\\\":{\\\"add_new\\\":\\\"Add new warehouse\\\"}}},\\\"home\\\":{\\\"notif\\\":{\\\"header\\\":\\\"Build your own delivery team\\\",\\\"body\\\":\\\"Login or create new account to have access to all deliverer.\\\"}},\\\"auth\\\":{\\\"login\\\":\\\"Login\\\",\\\"register\\\":\\\"Sign up\\\",\\\"create_delivery_acc\\\":\\\"How to create a delivery man account\\\",\\\"reset_password\\\":\\\"Reset password\\\",\\\"email_verify\\\":\\\"Email verification\\\",\\\"show_tuto\\\":\\\"See how it works!\\\",\\\"check_email\\\":\\\"checking email verification\\\",\\\"buttons\\\":{\\\"are_you\\\":\\\"Are you ?\\\",\\\"deliverer\\\":\\\"Deliverer\\\",\\\"merchant\\\":\\\"Merchant\\\",\\\"login\\\":\\\"Login\\\",\\\"register\\\":\\\"Register\\\",\\\"delivery_man\\\":\\\"Delivery Man\\\",\\\"delivery_company\\\":\\\"Delivery Company\\\",\\\"stock\\\":\\\"Stock\\\",\\\"default\\\":\\\"Default\\\",\\\"back\\\":\\\"Go back to home\\\"},\\\"messages\\\":{\\\"testing\\\":\\\"Still in testing, join white-list we will email you when it's ready\\\",\\\"add_network\\\":\\\"Add your delivery network\\\",\\\"send_email\\\":\\\"Sending verification email to\\\",\\\"error_send\\\":\\\"we couldn't send you a verification email now pls try again later or contact us\\\",\\\"success_send\\\":\\\"A verification email has been sent to\\\"},\\\"links\\\":{\\\"login\\\":\\\"Login with email ?\\\",\\\"register\\\":\\\"Register with email ?\\\",\\\"forgot_password\\\":\\\"Forgot password ?\\\",\\\"terms\\\":\\\"Terms\\\",\\\"help\\\":\\\"Help\\\",\\\"marketplace\\\":\\\"Marketplace\\\",\\\"home\\\":\\\"Home\\\"}},\\\"marketplace\\\":{\\\"headline\\\":\\\"Grow Your Business With The Right Team\\\",\\\"sub_headline\\\":\\\"Complete your team with the best deliverer that fit your needs\\\",\\\"buttons\\\":{\\\"cta\\\":\\\"Become a Deliverer\\\",\\\"ghost\\\":\\\"See All Deliverers\\\"},\\\"region_section\\\":{\\\"title\\\":\\\"Top regions\\\",\\\"deliverers\\\":\\\"Deliverers\\\"},\\\"deliverer_section\\\":{\\\"top\\\":\\\"Top deliverers\\\",\\\"trending\\\":\\\"Trending deliverers\\\",\\\"profile\\\":{\\\"view\\\":\\\"View profile\\\",\\\"rating\\\":\\\"Rating\\\",\\\"orders\\\":\\\"Orders\\\"}}},\\\"all_deliverers\\\":{\\\"filter\\\":{\\\"title\\\":\\\"Filter Deliverers\\\",\\\"by\\\":{\\\"fees\\\":\\\"By Fees\\\",\\\"reviews\\\":\\\"By reviews\\\",\\\"region\\\":\\\"By region\\\"},\\\"fields\\\":{\\\"from_label\\\":\\\"From\\\",\\\"from_placeholder\\\":\\\"Deliverer from (city)\\\",\\\"to_label\\\":\\\"To\\\",\\\"to_placeholder\\\":\\\"Deliverer to (city)\\\"},\\\"buttons\\\":{\\\"clear\\\":\\\"Clear filter\\\",\\\"apply\\\":\\\"Apply filters\\\"}},\\\"search\\\":{\\\"input\\\":\\\"Search by business name\\\",\\\"sort\\\":{\\\"label\\\":\\\"Sort by...\\\",\\\"recent\\\":\\\"Recent\\\",\\\"old\\\":\\\"Old\\\"}},\\\"pertnership_request\\\":{\\\"send\\\":\\\"Send partnership to :username\\\"}},\\\"deliverer_profile\\\":{\\\"merchant_reviews\\\":\\\"Merchants reviews\\\",\\\"refuse_request\\\":\\\"refuse update\\\",\\\"accept_request\\\":\\\"accept update\\\",\\\"new_requested_value\\\":\\\"New requested value\\\",\\\"request_fee_update\\\":\\\"request fee update\\\",\\\"similar_profile\\\":\\\"Similar Profiles\\\",\\\"orders_in_queue\\\":\\\"Orders in queue\\\",\\\"avg_response_time\\\":\\\"Avg. Response Time\\\",\\\"proposed_fees\\\":\\\"* fees proposed by merchant\\\",\\\"proposed_fees_new\\\":\\\"* New fees proposed by merchant\\\",\\\"not_yet_activated\\\":\\\"not yet accepted by deliverer\\\",\\\"links\\\":{\\\"about\\\":\\\"About me\\\",\\\"rates\\\":\\\"Rates\\\",\\\"pricing\\\":\\\"Pricing\\\",\\\"reviews\\\":\\\"Reviews\\\"},\\\"message_model\\\":{\\\"title\\\":\\\"Send message to :user\\\",\\\"message:label\\\":\\\"Type your message\\\",\\\"message:placeholder\\\":\\\"Message to :user\\\"},\\\"reviews\\\":{\\\"based_on\\\":\\\"Based on :count reviews\\\"},\\\"rates\\\":{\\\"proccessing_rate\\\":\\\"Proccessing Rate\\\",\\\"delivery_rate\\\":\\\"Delivery Rate\\\",\\\"payement_rate\\\":\\\"Payement Rate\\\"}},\\\"marchent_dashboard\\\":{\\\"sidebar\\\":{\\\"home\\\":\\\"Dashboard\\\",\\\"orders\\\":\\\"Orders\\\",\\\"products\\\":\\\"Products\\\",\\\"customers\\\":\\\"Customers\\\",\\\"stock_managemnt\\\":\\\"Stock Managemnt\\\",\\\"stock\\\":\\\"Warehouses\\\",\\\"operations\\\":\\\"Transfers\\\",\\\"expenses\\\":\\\"Expenses\\\",\\\"deliverers\\\":\\\"Deliverers\\\",\\\"staff\\\":\\\"Staff\\\",\\\"permission\\\":\\\"Roles & Permissions\\\",\\\"messages\\\":\\\"Messages\\\"},\\\"dashboard\\\":{\\\"week_sales\\\":\\\"week sales\\\",\\\"week_orders\\\":\\\"week orders\\\",\\\"month_sales\\\":\\\"month sales\\\",\\\"sales_this_month\\\":\\\"Sales this mounth\\\",\\\"low_availability\\\":\\\"Products low availability in stock\\\"},\\\"products\\\":{\\\"titles\\\":{\\\"add_new\\\":\\\"Add new product\\\",\\\"add_option\\\":\\\"Add & Edit Product options and variants\\\",\\\"edit_product\\\":\\\"Edit product\\\",\\\"list_categoy\\\":\\\"List of product category\\\"},\\\"fields\\\":{\\\"product_name\\\":\\\"Product name\\\",\\\"reference\\\":\\\"Reference\\\",\\\"wholesale_price\\\":\\\"Wholesale price\\\",\\\"price\\\":\\\"Price\\\",\\\"category\\\":\\\"Category\\\",\\\"select_or\\\":\\\"Select or\\\",\\\"add_category\\\":\\\"Add New category\\\",\\\"initial_quantity\\\":\\\"Initial quantity\\\",\\\"min_quantity\\\":\\\"Min alert quantity\\\",\\\"status\\\":\\\"Status\\\",\\\"options\\\":\\\"options\\\",\\\"variants\\\":\\\"variants\\\",\\\"control\\\":\\\"control\\\",\\\"option\\\":\\\"Option :option\\\",\\\"name\\\":\\\"Name\\\",\\\"num_products\\\":\\\"Number of products\\\"},\\\"labels\\\":{\\\"variants\\\":\\\"This product has multiple options, like diffrent sizes or colors\\\",\\\"enter_new_option\\\":\\\"Enter new key option separated by space, comma or semicolon\\\",\\\"category_name\\\":\\\"Enter product category name\\\"},\\\"buttons\\\":{\\\"add_new\\\":\\\"Add new option\\\",\\\"save_option\\\":\\\"Save & Apply options\\\",\\\"add_variant\\\":\\\"Add new variant\\\"}},\\\"orders\\\":{\\\"titles\\\":{\\\"customer_info\\\":\\\"Customer Info\\\",\\\"select_customer\\\":\\\"Select customer\\\",\\\"order_info\\\":\\\"Order Info\\\",\\\"create_new\\\":\\\"Create new order\\\",\\\"edit_order\\\":\\\"Edit order number :num\\\",\\\"send_orders\\\":\\\"Send orders\\\",\\\"view_order\\\":\\\"View Order :num\\\"},\\\"buttons\\\":{\\\"print_labels\\\":\\\"Print Labels\\\",\\\"print_orders\\\":\\\"Print Orders\\\",\\\"show_all\\\":\\\"Show all\\\",\\\"order\\\":\\\"order\\\",\\\"actions\\\":\\\"actions\\\",\\\"upload_excel\\\":\\\"Upload Excel\\\",\\\"download_template\\\":\\\"Download template\\\",\\\"assign_to\\\":\\\"Assign to\\\"},\\\"fields\\\":{\\\"all\\\":\\\"All\\\",\\\"on\\\":\\\"ON\\\",\\\"status\\\":\\\"Status\\\",\\\"customer\\\":\\\"Customer\\\",\\\"deliverer\\\":\\\"Deliverer\\\",\\\"confirmation_status\\\":\\\"Confirmation Status\\\",\\\"delivery_status\\\":\\\"Delivery Status\\\",\\\"payment_status\\\":\\\"Payment Status\\\",\\\"return_status\\\":\\\"Return Status\\\",\\\"order_status\\\":\\\"Order status\\\",\\\"products\\\":\\\"Products\\\",\\\"product\\\":\\\"Product\\\",\\\"price_total\\\":\\\"Price total\\\",\\\"tracking_number\\\":\\\"Tracking number\\\",\\\"warehouse\\\":\\\"Warehouse\\\",\\\"deliverer_note\\\":\\\"Deliverer note\\\",\\\"qte_in_warehouse\\\":\\\"Quantity in warehouse\\\",\\\"sender\\\":\\\"Sender\\\",\\\"recipient\\\":\\\"Recipient\\\",\\\"order_number\\\":\\\"Order number\\\",\\\"refund_center\\\":\\\"Refund Center\\\",\\\"instructions\\\":\\\"Instructions\\\",\\\"number_of_orders\\\":\\\"Number of orders\\\",\\\"order\\\":\\\"Order\\\",\\\"send_to\\\":\\\"Send to\\\",\\\"customer_details\\\":\\\"Customer Details\\\",\\\"order_details\\\":\\\"Order Details\\\",\\\"order_history\\\":\\\"Order History\\\",\\\"delivery_by\\\":\\\"Delivery By\\\",\\\"created_at\\\":\\\"Created at\\\",\\\"orders_fails\\\":\\\"orders failds\\\",\\\"orders_inserted\\\":\\\"orders inserted\\\",\\\"orders_fials\\\":\\\"orders fials\\\",\\\"orders\\\":\\\"orders \\\",\\\"create_orders\\\":\\\"create orders\\\",\\\"update_orders\\\":\\\"update orders\\\",\\\"send_orders\\\":\\\"send orders\\\"},\\\"messages\\\":{\\\"no_products\\\":\\\"No products exist in selected warehouse\\\",\\\"order_not_sent\\\":\\\"Some orders not sent !! quantity of products not enough.\\\",\\\"order_without_products\\\":\\\"Cannot send Order without Products.\\\",\\\"orders_uploaded_alert\\\":\\\":success orders inserted , :fials orders fials\\\",\\\"order_without_address\\\":\\\"Cannot send Order without Address (city).\\\",\\\"order_not_accepted\\\":\\\"You can not update order if deliverer doesn't accept the order\\\",\\\"remove_liste\\\":\\\"Remove list of products ?\\\",\\\"order_updated\\\":\\\"Your orders ID: :order_number has been updated successfully\\\"}},\\\"customers\\\":{\\\"titles\\\":{\\\"add_new\\\":\\\"Add new customer\\\",\\\"edit_customer\\\":\\\"Edit customer\\\"},\\\"buttons\\\":{\\\"add_shipping\\\":\\\"Add new shipping address\\\"}},\\\"deliverer\\\":{\\\"txt_1\\\":\\\"Grow Your Business With The Right Team!\\\",\\\"txt_2\\\":\\\"Build your delivery team with the best deliverer that fit your needs.\\\",\\\"show_delivery_pricing\\\":\\\"Show delivery locations pricing\\\",\\\"go_to_marketplace\\\":\\\"Go to Marketplace\\\"},\\\"expenses\\\":{\\\"titles\\\":{\\\"add_new\\\":\\\"Create Expense\\\",\\\"add_type\\\":\\\"Add New Type\\\"},\\\"fields\\\":{\\\"type\\\":\\\"Type\\\",\\\"staff\\\":\\\"Staff\\\",\\\"amount\\\":\\\"Amount\\\",\\\"expense_type\\\":\\\"Expense Type\\\",\\\"date_from\\\":\\\"Date From\\\"},\\\"placeholders\\\":{\\\"select_date\\\":\\\"Select date range\\\"},\\\"messages\\\":{\\\"invalid_date\\\":\\\"Invalid date range\\\",\\\"no_expenses_type\\\":\\\"No expenses type\\\"}},\\\"staff\\\":{\\\"titles\\\":{\\\"add_new\\\":\\\"add new user\\\",\\\"edit\\\":\\\"Edit :user info\\\"}},\\\"warehouse\\\":{\\\"titles\\\":{\\\"home_warehouse\\\":\\\"Home warehouse\\\",\\\"transfer_products\\\":\\\"Transfer products\\\"},\\\"fields\\\":{\\\"select_warehouse\\\":\\\"Select warehouse from OR\\\",\\\"add_product_quantity\\\":\\\"Add new product quantity\\\",\\\"list_product\\\":\\\"List of product\\\",\\\"current\\\":\\\"current\\\",\\\"transfer_to\\\":\\\"Transfer products to\\\"}},\\\"permissions\\\":{\\\"titles\\\":{\\\"add_role\\\":\\\"create new role\\\",\\\"edit_role\\\":\\\"edit role ':role'\\\"},\\\"fields\\\":{\\\"role_name\\\":\\\"Role name\\\",\\\"created_at\\\":\\\"Created At\\\",\\\"users\\\":\\\"Users\\\",\\\"entity\\\":\\\"Entity\\\",\\\"view_all\\\":\\\"View all\\\",\\\"view_assigned\\\":\\\"View assigned\\\",\\\"assign_permission\\\":\\\"Assign permission\\\"}}},\\\"deliverer_dashboard\\\":{\\\"sidebar\\\":{\\\"dashboard\\\":\\\"Dashboard\\\",\\\"orders\\\":\\\"Orders\\\",\\\"orders:all\\\":\\\"All\\\",\\\"orders:processed\\\":\\\"Proccessed\\\",\\\"orders:received\\\":\\\"Received\\\",\\\"finance\\\":\\\"Finance\\\",\\\"warehouse\\\":\\\"Warehouses\\\",\\\"product_ops\\\":\\\"Product Operations\\\",\\\"inbox\\\":\\\"Inbox\\\",\\\"inbox:messages\\\":\\\"Messages\\\",\\\"inbox:requests\\\":\\\"Partener requests\\\",\\\"settings\\\":\\\"Settings\\\",\\\"delivery_locations\\\":\\\"Delivery locations\\\",\\\"verification_center\\\":\\\"verification center\\\",\\\"profile\\\":\\\"Profile\\\",\\\"my_profile\\\":\\\"My Profile\\\"},\\\"verification_center\\\":{\\\"title\\\":\\\"Verification center\\\",\\\"message\\\":\\\"To keep our platform safe for everyone, we need some informations to confirm your identity.\\\",\\\"status\\\":\\\"Status\\\",\\\"company\\\":\\\"company\\\",\\\"individual\\\":\\\"individual\\\",\\\"company_name\\\":\\\"Company Name\\\",\\\"ice\\\":\\\"ICE Number\\\",\\\"rc_number\\\":\\\"RC Number\\\",\\\"rc\\\":\\\"RC\\\",\\\"id_front\\\":\\\"Proof of ID (Front)\\\",\\\"id_back\\\":\\\"Proof of ID (Back)\\\",\\\"Auto_card\\\":\\\"Auto entrepreneur card\\\",\\\"car_image\\\":\\\"Image vehicule\\\",\\\"extra_link\\\":\\\"Your website or your social link (Facebook/Instagram page or profile)\\\",\\\"submit\\\":\\\"Submit for review\\\"},\\\"messages\\\":{\\\"notif\\\":\\\"Notifications\\\",\\\"welcome\\\":\\\"Welcome back :user\\\",\\\"new:order_request\\\":\\\"You Have new order requests, you can verify your fees and accept to process them.\\\",\\\"new:partner_request\\\":\\\"You Have new Partner requests, contact them and cofirm your fees.\\\",\\\"accept_order\\\":\\\"Accept order number :order from :merchant\\\",\\\"refuse_order\\\":\\\"Refuse order number :order from :merchant\\\",\\\"total_product\\\":\\\"Product :count\\\",\\\"order_num\\\":\\\"Order N°: :num\\\",\\\"archived_message\\\":\\\"your account is archived you will no longer be able to connect for more information contact us \\\",\\\"archived_btn\\\":\\\"Contact us\\\",\\\"pending_message\\\":\\\"Some feature are suspended until you confirm your identity\\\",\\\"pending_btn\\\":\\\"Go to verification center\\\"},\\\"dashboard\\\":{\\\"today_order_request\\\":\\\"Today Order Requests\\\",\\\"orders_to_proccess\\\":\\\"Orders To Proccess\\\",\\\"profit_this_month\\\":\\\"Profit this month\\\",\\\"requests:order\\\":\\\":orders Order Requests\\\",\\\"requests:partner\\\":\\\":requests Partner Requests\\\",\\\"sales_this_months\\\":\\\"Sales this month\\\",\\\"labels\\\":{\\\"order\\\":\\\"Order\\\",\\\"all\\\":\\\"All\\\",\\\"confirmed\\\":\\\"Confirmed\\\",\\\"delivered\\\":\\\"Delivered\\\"}},\\\"orders\\\":{\\\"order_details\\\":\\\"Order Details\\\",\\\"shipping_address\\\":\\\"Shipping Address\\\",\\\"merchant_note\\\":\\\"Merchant note\\\",\\\"search_location\\\":\\\"Search location\\\",\\\"buttons\\\":{\\\"sms\\\":\\\"Send a SMS Message\\\",\\\"call\\\":\\\"Call Customer\\\",\\\"select\\\":\\\"-- Select new status --\\\",\\\"whatsapp\\\":\\\"Send a WhatsApp Message\\\"}},\\\"warehouses\\\":{\\\"transfer\\\":\\\"Transfers\\\",\\\"make_transfer\\\":\\\"Make transfers\\\",\\\"and\\\":\\\"and\\\",\\\"fields\\\":{\\\"product\\\":\\\"Product\\\",\\\"products\\\":\\\"Products\\\",\\\"in_stock\\\":\\\"In stock\\\",\\\"outgoing\\\":\\\"Outgoing\\\",\\\"incoming\\\":\\\"Incoming\\\",\\\"price\\\":\\\"Product price\\\",\\\"quantity\\\":\\\"Quantity\\\",\\\"warehouses\\\":\\\"Warehouses\\\",\\\"note\\\":\\\"Note\\\",\\\"date\\\":\\\"Date\\\",\\\"merchant\\\":\\\"Merchant\\\",\\\"status\\\":\\\"Status\\\"},\\\"operations\\\":{\\\"show_details\\\":\\\"Show details\\\",\\\"received\\\":\\\"Received\\\",\\\"dispatch\\\":\\\"Dispatch\\\",\\\"cancel\\\":\\\"Cancel\\\",\\\"problem\\\":\\\"Problem\\\"}},\\\"inbox_request\\\":{\\\"you_are_partners\\\":\\\"You are partners\\\",\\\"refused\\\":\\\"Refused\\\",\\\"free_trial\\\":{\\\"ready\\\":\\\"Ready to dive in?\\\",\\\"start\\\":\\\"Start your free trial today.\\\",\\\"get_started\\\":\\\"Get started\\\",\\\"learn_more\\\":\\\"Learn more\\\"}},\\\"inbox_messages\\\":{\\\"label\\\":{\\\"chats\\\":\\\"Chats\\\",\\\"nothing\\\":\\\"No messages, yet.\\\",\\\"select_room\\\":\\\"No messages in your inbox, start chatting with people around you.\\\",\\\"type_message\\\":\\\"Type a message\\\",\\\"no_contact\\\":\\\"No contacts found\\\",\\\"no_more_messages\\\":\\\"No more message\\\"}},\\\"profile\\\":{\\\"personal_info\\\":\\\"Personal Info\\\",\\\"additional_info\\\":\\\"Additional Info\\\"}},\\\"feedback\\\":{\\\"headline\\\":\\\"How can we improve?\\\",\\\"paragraph\\\":\\\"Please give us feedback on how we can improve. If you need help solving a specific problem, please\\\",\\\"contact_us\\\":\\\"contact us!\\\",\\\"placeholders\\\":{\\\"select_topic\\\":\\\"Select topic details\\\",\\\"include_details\\\":\\\"Please include as much as info as possible...\\\",\\\"add_screenshot\\\":\\\"Add a screenshot or video (recommended)\\\",\\\"call_for_details\\\":\\\"Want us to call you for details? (Check for Yes)\\\"},\\\"options\\\":{\\\"others\\\":\\\"Others\\\",\\\"home_page\\\":\\\"Home page\\\",\\\"delivery_marketplace\\\":\\\"Delivery marketplace\\\",\\\"deliverer_profile\\\":\\\"Deliverer profile\\\",\\\"merchant_dashbaord\\\":\\\"Merchant dashborad\\\",\\\"deliverer_dashbaord\\\":\\\"Deliverer dashboard\\\",\\\"warehouses\\\":\\\"Warehouses\\\"}},\\\"admin\\\":{\\\"navbar\\\":{\\\"home\\\":\\\"Home\\\",\\\"users\\\":\\\"Users\\\",\\\"staff\\\":\\\"Staff\\\",\\\"feedback\\\":\\\"Feedback\\\"},\\\"home\\\":{\\\"expenses\\\":\\\"Expenses\\\",\\\"merchant\\\":\\\"Merchants\\\",\\\"delivery_man\\\":\\\"Delivery men\\\",\\\"orders\\\":\\\"Orders\\\"},\\\"users\\\":{\\\"add_user\\\":\\\"Add user\\\",\\\"edit_user\\\":\\\"Edit user\\\",\\\"showing\\\":\\\"Showing\\\",\\\"results_of\\\":\\\"Results of\\\",\\\"buttons\\\":{\\\"view\\\":\\\"View\\\",\\\"sign_in\\\":\\\"Sign in\\\"}},\\\"staff\\\":{\\\"add_staff\\\":\\\"Add staff\\\",\\\"edit_staff\\\":\\\"Edit Staff\\\"},\\\"feedback\\\":{\\\"table\\\":{\\\"page\\\":\\\"Page\\\",\\\"url\\\":\\\"Url\\\",\\\"topic\\\":\\\"Topic\\\",\\\"feedback\\\":\\\"Feedback\\\",\\\"file\\\":\\\"File\\\",\\\"phone\\\":\\\"Phone number\\\",\\\"date\\\":\\\"Date\\\"}}},\\\"footer\\\":{\\\"about\\\":{\\\"title\\\":\\\"Who are we ?\\\",\\\"description\\\":\\\"CODrocket is a cash-on-delivery sales management platform that provides all services that help merchants and distributors run their businesses.\\\"},\\\"infos\\\":{\\\"title\\\":\\\"Informations :\\\",\\\"links\\\":{\\\"how_to_start\\\":\\\"How do I start e-commerce (coming soon).\\\",\\\"delivery_companies\\\":\\\"List of delivery companies.\\\",\\\"deliver_orders\\\":\\\"Want to deliver orders? Press here.\\\",\\\"blog\\\":\\\"Read articles (coming soon).\\\"}},\\\"contact\\\":{\\\"title\\\":\\\"Contact Us :\\\",\\\"details\\\":{\\\"address\\\":\\\"Abdallah Knoun Street Salam, Agadir, Morocco.\\\"}},\\\"copyright\\\":\\\"All rights reserved.\\\",\\\"by\\\":\\\"Design & Development by\\\"}}\");\n\n//# sourceURL=webpack:///./src/locales/en.json?");

/***/ })

}]);