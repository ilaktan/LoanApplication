$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/test.feature");
formatter.feature({
  "name": "Personal Loan",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@loan"
    }
  ]
});
formatter.scenarioOutline({
  "name": "as a user over 18 (Happy path)",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigate the loan page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter the borrow of amount",
  "keyword": "Then "
});
formatter.step({
  "name": "User enter the months",
  "keyword": "Then "
});
formatter.step({
  "name": "User enter the \"\u003creason\u003e\" for loan",
  "keyword": "Then "
});
formatter.step({
  "name": "User enter personal information \"over 18\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enter address info",
  "keyword": "Then "
});
formatter.step({
  "name": "User should be able to see \"Thank you for your application\" message",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "reason"
      ]
    },
    {
      "cells": [
        "Car finance"
      ]
    },
    {
      "cells": [
        "Debt consoildation"
      ]
    },
    {
      "cells": [
        "Holiday/Vacation"
      ]
    },
    {
      "cells": [
        "Refurbishment"
      ]
    },
    {
      "cells": [
        "Wedding finance"
      ]
    }
  ]
});
formatter.scenario({
  "name": "as a user over 18 (Happy path)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigate the loan page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_navigate_the_loan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the borrow of amount",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_borrow_of_amount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the months",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_months()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"Car finance\" for loan",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_for_loan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter personal information \"over 18\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterPersonalInformation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter address info",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterAddressInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see \"Thank you for your application\" message",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userShouldBeAbleToSeeMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "as a user over 18 (Happy path)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigate the loan page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_navigate_the_loan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the borrow of amount",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_borrow_of_amount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the months",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_months()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"Debt consoildation\" for loan",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_for_loan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter personal information \"over 18\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterPersonalInformation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter address info",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterAddressInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see \"Thank you for your application\" message",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userShouldBeAbleToSeeMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "as a user over 18 (Happy path)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigate the loan page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_navigate_the_loan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the borrow of amount",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_borrow_of_amount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the months",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_months()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"Holiday/Vacation\" for loan",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_for_loan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter personal information \"over 18\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterPersonalInformation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter address info",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterAddressInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see \"Thank you for your application\" message",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userShouldBeAbleToSeeMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "as a user over 18 (Happy path)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigate the loan page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_navigate_the_loan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the borrow of amount",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_borrow_of_amount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the months",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_months()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"Refurbishment\" for loan",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_for_loan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter personal information \"over 18\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterPersonalInformation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter address info",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterAddressInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see \"Thank you for your application\" message",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userShouldBeAbleToSeeMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "as a user over 18 (Happy path)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigate the loan page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_navigate_the_loan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the borrow of amount",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_borrow_of_amount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the months",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_months()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"Wedding finance\" for loan",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_for_loan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter personal information \"over 18\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterPersonalInformation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter address info",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterAddressInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see \"Thank you for your application\" message",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userShouldBeAbleToSeeMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "as a user under 18 (Negative)",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigate the loan page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter the borrow of amount",
  "keyword": "Then "
});
formatter.step({
  "name": "User enter the months",
  "keyword": "Then "
});
formatter.step({
  "name": "User enter the \"\u003creason\u003e\" for loan",
  "keyword": "Then "
});
formatter.step({
  "name": "User enter personal information \"under 18\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enter address info",
  "keyword": "Then "
});
formatter.step({
  "name": "User shouldn\u0027t be able to see \"Thank you for your application\" message",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "reason"
      ]
    },
    {
      "cells": [
        "Car finance"
      ]
    },
    {
      "cells": [
        "Debt consoildation"
      ]
    },
    {
      "cells": [
        "Holiday/Vacation"
      ]
    },
    {
      "cells": [
        "Refurbishment"
      ]
    },
    {
      "cells": [
        "Wedding finance"
      ]
    }
  ]
});
formatter.scenario({
  "name": "as a user under 18 (Negative)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigate the loan page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_navigate_the_loan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the borrow of amount",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_borrow_of_amount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the months",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_months()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"Car finance\" for loan",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_for_loan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter personal information \"under 18\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterPersonalInformation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter address info",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterAddressInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User shouldn\u0027t be able to see \"Thank you for your application\" message",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userShouldnTBeAbleToSeeMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "as a user under 18 (Negative)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigate the loan page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_navigate_the_loan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the borrow of amount",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_borrow_of_amount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the months",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_months()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"Debt consoildation\" for loan",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_for_loan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter personal information \"under 18\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterPersonalInformation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter address info",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterAddressInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User shouldn\u0027t be able to see \"Thank you for your application\" message",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userShouldnTBeAbleToSeeMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "as a user under 18 (Negative)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigate the loan page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_navigate_the_loan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the borrow of amount",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_borrow_of_amount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the months",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_months()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"Holiday/Vacation\" for loan",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_for_loan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter personal information \"under 18\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterPersonalInformation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter address info",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterAddressInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User shouldn\u0027t be able to see \"Thank you for your application\" message",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userShouldnTBeAbleToSeeMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "as a user under 18 (Negative)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigate the loan page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_navigate_the_loan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the borrow of amount",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_borrow_of_amount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the months",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_months()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"Refurbishment\" for loan",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_for_loan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter personal information \"under 18\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterPersonalInformation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter address info",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterAddressInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User shouldn\u0027t be able to see \"Thank you for your application\" message",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userShouldnTBeAbleToSeeMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "as a user under 18 (Negative)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigate the loan page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_navigate_the_loan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the borrow of amount",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_borrow_of_amount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the months",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_months()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"Wedding finance\" for loan",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.user_enter_the_for_loan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter personal information \"under 18\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterPersonalInformation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter address info",
  "keyword": "Then "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userEnterAddressInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User shouldn\u0027t be able to see \"Thank you for your application\" message",
  "keyword": "And "
});
formatter.match({
  "location": "com.netcall.step_definitions.loan_step_def.userShouldnTBeAbleToSeeMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});