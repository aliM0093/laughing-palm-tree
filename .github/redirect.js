// JavaScript Document
var Redirect = (new function () {
    this.language = MApp(2.2).language.langArr[0];
    if (this.language == 'da') this.language = 'dk';
    this.language1 = MApp(2.2).language.langArr[1];
    this.domain = MApp(2.2).url.getDomain();
    this.dirPath = MApp(2.2).url.getDirPath();
    this.filePath = MApp(2.2).url.getFilePath();
    this.fileName = MApp(2.2).url.getFileName();
    this.fileExt = MApp(2.2).packages.getFileExt(this.fileName);
    this.getRedirectUrl = function () {
        var exclude_url = ['/en/how-to-uninstall-problematic-nvidia-graphics-drivers-on-windows.php'];
        var languageList = new Array();
        languageList['ru'] = new Array();
        languageList['ru']['www.iobit.com'] = new Array();
        languageList['ru']['www.iobit.com']['redirectAll'] = false;
        languageList['ru']['www.iobit.com']['defaultRedirectUrl'] = 'https://ru.iobit.com/';
        languageList['ru']['www.iobit.com']['/en/install/asc/'] = 'https://ru.iobit.com/install/asc/index.php';
        languageList['ru']['www.iobit.com']['/en/install/db/'] = 'https://ru.iobit.com/install/db/index.php';
        languageList['ru']['www.iobit.com']['/en/install/imf/'] = 'https://ru.iobit.com/install/imf/index.php';
        languageList['ru']['www.iobit.com']['/en/install/sd/'] = 'https://ru.iobit.com/install/sd/index.php';
        languageList['ru']['www.iobit.com']['/en/install/uninstaller/'] = 'https://ru.iobit.com/install/uninstaller/index.php';
        languageList['ru']['www.iobit.com']['/en/update/asc/'] = 'https://ru.iobit.com/update/asc/index.php';
        languageList['ru']['www.iobit.com']['/en/update/db/'] = 'https://ru.iobit.com/update/db/index.php';
        languageList['ru']['www.iobit.com']['/en/update/imf/'] = 'https://ru.iobit.com/update/imf/index.php';
        languageList['ru']['www.iobit.com']['/en/update/sd/'] = 'https://ru.iobit.com/update/sd/index.php';
        languageList['ru']['www.iobit.com']['/en/update/uninstaller/'] = 'https://ru.iobit.com/update/uninstaller/index.php';
        languageList['ru']['www.iobit.com']['/en/update/iu/'] = 'https://ru.iobit.com/update/iu/index.php';
        languageList['ru']['www.iobit.com']['/en/compare/iu/'] = 'https://ru.iobit.com/compare/iu/index.php';
        languageList['ru']['www.iobit.com']['/en/compare/asc/'] = 'https://ru.iobit.com/compare/asc/index.php';
        languageList['ru']['www.iobit.com']['/en/compare/db/'] = 'https://ru.iobit.com/compare/db/index.php';
        languageList['ru']['www.iobit.com']['/en/compare/imf/'] = 'https://ru.iobit.co/compare/imf/index.php';
        languageList['ru']['www.iobit.com']['/en/update/isu/'] = 'https://ru.iobit.com/update/isu/';
        languageList['ru']['www.iobit.com']['/en/mic-test.php'] = 'https://ru.iobit.com/mic-test.php';
        languageList['ru']['www.iobit.com']['/en/iobit-speed-test.php'] = 'https://ru.iobit.com/iobit-speed-test.php';
        languageList['ru']['www.iobit.com']['/en/webcam-test.php'] = 'https://ru.iobit.com/webcam-test.php';
        languageList['ru']['www.iobit.com']['/en/eula.php'] = 'https://ru.iobit.com/eula.php';
        languageList['ru']['www.iobit.com']['/en/privacy.php'] = 'https://ru.iobit.com/privacy.php';



        languageList['ja'] = new Array();
        languageList['ja']['www.iobit.com'] = new Array();
        languageList['ja']['www.iobit.com']['redirectAll'] = true;
        languageList['ja']['www.iobit.com']['defaultRedirectUrl'] = 'https://jp.iobit.com';
        languageList['ja']['www.iobit.com']['/en/index.php'] = 'https://jp.iobit.com';
        languageList['ja']['www.iobit.com']['/en/products.php'] = 'https://jp.iobit.com/product.html';
        languageList['ja']['www.iobit.com']['/en/store.php'] = 'https://jp.iobit.com/store.html';
        languageList['ja']['www.iobit.com']['/en/download.php'] = 'https://jp.iobit.com/free.html';
        languageList['ja']['www.iobit.com']['/en/advancedsystemcarepro.php'] = 'https://jp.iobit.com/product/asc.html';
        languageList['ja']['www.iobit.com']['/en/iobitsmartdefrag.php'] = 'https://jp.iobit.com/pc-optimization-software/smart-defrag-pro.html';
        languageList['ja']['www.iobit.com']['/en/iobitstartmenu8.php'] = 'https://jp.iobit.com/pc-optimization-software/startmenu8-pro.html';
        languageList['ja']['www.iobit.com']['/en/password-protected-folder.php'] = 'https://jp.iobit.com/pc-protection-software/protected-folder-pro.html';
        languageList['ja']['www.iobit.com']['/en/advanceduninstaller.php'] = 'https://jp.iobit.com/free/iou.html';
        languageList['ja']['www.iobit.com']['/en/advanceduninstallerpro.php'] = 'https://jp.iobit.com/product/iou.html';
        languageList['ja']['www.iobit.com']['/en/advancedsystemcarefree.php'] = 'https://jp.iobit.com/free/ascf.html';
        languageList['ja']['www.iobit.com']['/en/driver-booster.php'] = 'https://jp.iobit.com/free/driverbooster.html';
        languageList['ja']['www.iobit.com']['/en/driver-booster-pro.php'] = 'https://jp.iobit.com/product/driverbooster.html';
        languageList['ja']['www.iobit.com']['/en/malware-fighter.php'] = 'https://jp.iobit.com/free/mff.html';
        languageList['ja']['www.iobit.com']['/en/malware-fighter-pro.php'] = 'https://jp.iobit.com/product/mfp.html';
        languageList['ja']['www.iobit.com']['/en/iobit-software-updater.php'] = 'https://jp.iobit.com/pc-optimization-software/iobit-software-updater-pro.html';
        languageList['ja']['www.iobit.com']['/en/renew.php'] = 'https://jp.iobit.com/support/license.html';
        languageList['ja']['www.iobit.com']['/en/advanced-systemcare-antivirus.php'] = 'https://jp.iobit.com/pc-protection-software/advanced-systemcare-ultimate-pro.html';
        languageList['ja']['www.iobit.com']['/en/awards.php'] = 'https://jp.iobit.com/support/faq.html';
        languageList['ja']['www.iobit.com']['/en/privacy.php'] = 'https://jp.iobit.com/rd/privacy';
        languageList['ja']['www.iobit.com']['/pt/index.php'] = 'https://jp.iobit.com';
        languageList['ja']['www.iobit.com']['/pt/driver-booster.php'] = 'https://jp.iobit.com/free/driverbooster.html';
        languageList['ja']['www.iobit.com']['/pt/driver-booster-pro.php'] = 'https://jp.iobit.com/free/driverbooster.html';
        languageList['ja']['www.iobit.com']['/fr/advanced-systemcare-antivirus.php'] = 'https://jp.iobit.com/product/ascwithav.html?ref=asc';
        languageList['ja']['www.iobit.com']['/es/index.php'] = 'https://jp.iobit.com';
        languageList['ja']['www.iobit.com']['/es/driver-booster.php'] = 'https://jp.iobit.com/free/driverbooster.html';
        languageList['ja']['www.iobit.com']['/es/advancedsystemcarefree.php'] = 'https://jp.iobit.com/free/ascf.html';
        languageList['ja']['www.iobit.com']['/en/update/imf/'] = 'https://jp.iobit.com/free/mff.html';
        languageList['ja']['www.iobit.com']['/en/update/uninstaller/'] = 'https://jp.iobit.com/rd/iu-update';

        languageList['ja']['www.iobit.com']['/en/hotquestions-ascu.php'] = 'https://jp.iobit.com/faq.html?id=ascu_license_authentication';
        languageList['ja']['www.iobit.com']['/en/hotquestions-asc.php'] = 'https://jp.iobit.com/faq.html?id=asc_license_authentication';
        languageList['ja']['www.iobit.com']['/en/hotquestions-db.php'] = 'https://jp.iobit.com/faq.html?id=db_license_authentication';
        languageList['ja']['www.iobit.com']['/en/hotquestions-imf.php'] = 'https://jp.iobit.com/faq.html?id=imf_license_authentication';
        languageList['ja']['www.iobit.com']['/en/hotquestions-sd.php'] = 'https://jp.iobit.com/faq.html?id=sd_license_authentication';
        languageList['ja']['www.iobit.com']['/en/hotquestions-iu.php'] = 'https://jp.iobit.com/faq.html?id=iu_license_authentication';
        languageList['ja']['www.iobit.com']['/en/hotquestions-sm8.php'] = 'https://jp.iobit.com/faq.html?id=sm8_license_authentication';
        languageList['ja']['www.iobit.com']['/en/hotquestions-isu.php'] = 'https://jp.iobit.com/faq.html?id=license_authentication';
        languageList['ja']['www.iobit.com']['/product-manuals/asc-help/'] = 'https://jp.iobit.com/rd/asc8_manual';
        languageList['ja']['www.iobit.com']['/product-manuals/db-help/'] = 'https://jp.iobit.com/rd/db_manual';
        languageList['ja']['www.iobit.com']['/product-manuals/imf-help/'] = 'https://jp.iobit.com/rd/imf_manual';
        languageList['ja']['www.iobit.com']['/product-manuals/iu-help/'] = 'https://jp.iobit.com/rd/iou_manual';
        languageList['ja']['www.iobit.com']['/product-manuals/sm8-help/'] = 'https://jp.iobit.com/rd/sm8_manual';
        languageList['ja']['www.iobit.com']['/product-manuals/sd-help/'] = 'https://jp.iobit.com/rd/sd_manual';
        languageList['ja']['www.iobit.com']['/en/translate.php'] = 'https://jp.iobit.com/translate.php';
        languageList['ja']['www.iobit.com']['/en/lostcode.php'] = 'https://jp.iobit.com/rd/lostcode';
        languageList['ja']['www.iobit.com']['/en/install/uninstaller/'] = 'https://jp.iobit.com/rd/iu-thank-you';
        languageList['ja']['www.iobit.com']['/en/install/sm8/'] = 'https://jp.iobit.com/rd/sm8-install';
        languageList['ja']['www.iobit.com']['/en/onlinefeedback-form.php'] = 'https://jp.iobit.com/rd/feedback';
        languageList['ja']['www.iobit.com']['/en/faq.php'] = 'https://jp.iobit.com/rd/faq';
        languageList['ja']['www.iobit.com']['/en/imf/30daytrial.php'] = 'https://jp.iobit.com/rd/imf-activate';
        languageList['ja']['www.iobit.com']['/en/update/sd/'] = 'https://jp.iobit.com/rd/sd-autoupdate-free-general';
        languageList['ja']['www.iobit.com']['/en/install/sd/'] = 'https://jp.iobit.com/rd/sd-install';
        languageList['ja']['www.iobit.com']['/en/install/asc/'] = 'https://jp.iobit.com/rd/asc-thank-you';
        languageList['ja']['www.iobit.com']['/en/install/imf/'] = 'https://jp.iobit.com/rd/imf-install';
        languageList['ja']['www.iobit.com']['/en/update/sm8/'] = 'https://jp.iobit.com/lp/startmenu8_free_general_autoupdate.html';
        languageList['ja']['www.iobit.com']['/en/update/sm/'] = 'https://jp.iobit.com/lp/startmenu8_free_general_autoupdate.html';
        languageList['ja']['www.iobit.com']['/en/update/asc/'] = 'https://jp.iobit.com/lp/advancedsystemcare_free_general_autoupdate.html';
        languageList['ja']['www.iobit.com']['/en/update/ascu/'] = 'https://jp.iobit.com/free/ascwithav.html';
        languageList['ja']['www.iobit.com']['/en/update/imf/'] = 'https://jp.iobit.com/lp/malwarefighter_free_general_autoupdate.html';
        languageList['ja']['www.iobit.com']['/en/update/db/'] = 'https://jp.iobit.com/lp/driverbooster_free_general_autoupdate.html';
        languageList['ja']['www.iobit.com']['/en/update/sd/'] = 'https://jp.iobit.com/lp/smartdefrag_free_general_autoupdate.html';
        languageList['ja']['www.iobit.com']['/en/update/uninstaller/'] = 'https://jp.iobit.com/lp/iobituninstaller_free_general_autoupdate.html';
        languageList['ja']['www.iobit.com']['/en/update/iu/'] = 'https://jp.iobit.com/lp/iobituninstaller_free_general_autoupdate.html';
        languageList['ja']['www.iobit.com']['/en/update/isu/'] = 'https://jp.iobit.com/update/isu/';
        languageList['ja']['www.iobit.com']['/en/update/isu/index.php'] = 'https://jp.iobit.com/update/isu/';
        languageList['ja']['www.iobit.com']['/en/uninstall/asc/index.php'] = 'https://jp.iobit.com/rd/asc-uninstall';
        languageList['ja']['www.iobit.com']['/en/compare/imf/'] = 'https://jp.iobit.com/rd/imf-compare';
        languageList['ja']['www.iobit.com']['/en/renew/ascultimate.php'] = 'https://jp.iobit.com/rd/ascu-purchase-renew';
        languageList['ja']['www.iobit.com']['/en/eula-db.php'] = 'https://jp.iobit.com/eula-db.php';
        languageList['ja']['www.iobit.com']['/en/eula-bd.php'] = 'https://jp.iobit.com/eula-bd.php';
        languageList['ja']['www.iobit.com']['/en/eula.php'] = 'https://jp.iobit.com/rd/agreement';
        languageList['ja']['www.iobit.com']['/en/imfcs-privacystatement.php'] = 'https://jp.iobit.com/imfcs-privacystatement.php';


        languageList['fr'] = new Array();
        languageList['fr']['www.iobit.com'] = new Array();
        languageList['fr']['www.iobit.com']['redirectAll'] = false;
        languageList['fr']['www.iobit.com']['defaultRedirectUrl'] = 'https://www.iobit.com/fr/';
        languageList['fr']['www.iobit.com']['/en/install/asc/'] = 'https://www.iobit.com/fr/install/asc/index.php';
        languageList['fr']['www.iobit.com']['/en/install/db/'] = 'https://www.iobit.com/fr/install/db/index.php';
        languageList['fr']['www.iobit.com']['/en/install/imf/'] = 'https://www.iobit.com/fr/install/imf/index.php';
        languageList['fr']['www.iobit.com']['/en/install/sd/'] = 'https://www.iobit.com/fr/install/sd/index.php';
        languageList['fr']['www.iobit.com']['/en/install/uninstaller/'] = 'https://www.iobit.com/fr/install/uninstaller/index.php';
        languageList['fr']['www.iobit.com']['/en/install/sm8/'] = 'https://www.iobit.com/fr/install/sm8/index.php';
        languageList['fr']['www.iobit.com']['/en/install/uninstallerb/'] = 'https://www.iobit.com/fr/install/uninstallerb/index.php';
        languageList['fr']['www.iobit.com']['/en/update/asc/'] = 'https://www.iobit.com/fr/update/asc/index.php';
        languageList['fr']['www.iobit.com']['/en/update/db/'] = 'https://www.iobit.com/fr/update/db/index.php';
        languageList['fr']['www.iobit.com']['/en/update/imf/'] = 'https://www.iobit.com/fr/update/imf/index.php';
        languageList['fr']['www.iobit.com']['/en/update/sd/'] = 'https://www.iobit.com/fr/update/sd/index.php';
        languageList['fr']['www.iobit.com']['/en/update/uninstaller/'] = 'https://www.iobit.com/fr/update/uninstaller/index.php';
        languageList['fr']['www.iobit.com']['/en/update/sm8/'] = 'https://www.iobit.com/fr/update/sm8/index.php';
        languageList['fr']['www.iobit.com']['/en/update/iu/'] = 'https://www.iobit.com/fr/update/iu/index.php';
        languageList['fr']['www.iobit.com']['/en/compare/iu/'] = 'https://www.iobit.com/fr/compare/iu/index.php';
        languageList['fr']['www.iobit.com']['/en/compare/asc/'] = 'https://www.iobit.com/fr/compare/asc/index.php';
        languageList['fr']['www.iobit.com']['/en/compare/db/'] = 'https://www.iobit.com/fr/compare/db/index.php';
        languageList['fr']['www.iobit.com']['/en/compare/imf/'] = 'https://www.iobit.com/fr/compare/imf/index.php';
        languageList['fr']['www.iobit.com']['/en/compare/sd/'] = 'https://www.iobit.com/fr/compare/sd/index.php';
        languageList['fr']['www.iobit.com']['/en/renew/ascultimate.php'] = 'https://www.iobit.com/fr/renew/ascultimate.php';
        languageList['fr']['www.iobit.com']['/iobitsmartdefrag.php'] = 'https://www.iobit.com/fr/iobitsmartdefrag.php';
        languageList['fr']['www.iobit.com']['/en/update/isu/'] = 'https://www.iobit.com/fr/update/isu/';
        languageList['fr']['www.iobit.com']['/iobitstartmenu8.php'] = 'https://www.iobit.com/fr/iobitstartmenu8.php';
        languageList['fr']['www.iobit.com']['/thanksforfeedback.php'] = 'https://www.iobit.com/fr/thanksforfeedback.php';
        languageList['fr']['www.iobit.com']['/thankyou.php'] = 'https://www.iobit.com/fr/thankyou.php';
        languageList['fr']['www.iobit.com']['/fr/eula/ascu-eula.php'] = 'https://www.iobit.com/fr/eula.php';
        languageList['fr']['www.iobit.com']['/fr/eula/asc-eula.php'] = 'https://www.iobit.com/fr/eula.php';
        languageList['fr']['www.iobit.com']['/fr/eula/db-eula.php'] = 'https://www.iobit.com/fr/eula.php';
        languageList['fr']['www.iobit.com']['/fr/eula/imf-eula.php'] = 'https://www.iobit.com/fr/eula.php';
        languageList['fr']['www.iobit.com']['/fr/eula/sd-eula.php'] = 'https://www.iobit.com/fr/eula.php';
        languageList['fr']['www.iobit.com']['/en/mic-test.php'] = 'https://www.iobit.com/fr/mic-test.php';
        languageList['fr']['www.iobit.com']['/en/iobit-speed-test.php'] = 'https://www.iobit.com/fr/iobit-speed-test.php';
        languageList['fr']['www.iobit.com']['/en/webcam-test.php'] = 'https://www.iobit.com/fr/webcam-test.php';
        languageList['fr']['www.iobit.com']['/en/eula.php'] = 'https://www.iobit.com/fr/eula.php';
        languageList['fr']['www.iobit.com']['/en/privacy.php'] = 'https://www.iobit.com/fr/privacy.php';


        languageList['es'] = new Array();
        languageList['es']['www.iobit.com'] = new Array();
        languageList['es']['www.iobit.com']['redirectAll'] = false;
        languageList['es']['www.iobit.com']['defaultRedirectUrl'] = 'https://www.iobit.com/es/';
        languageList['es']['www.iobit.com']['/en/install/asc/'] = 'https://www.iobit.com/es/install/asc/index.php';
        languageList['es']['www.iobit.com']['/en/install/db/'] = 'https://www.iobit.com/es/install/db/index.php';
        languageList['es']['www.iobit.com']['/en/install/imf/'] = 'https://www.iobit.com/es/install/imf/index.php';
        languageList['es']['www.iobit.com']['/en/install/sd/'] = 'https://www.iobit.com/es/install/sd/index.php';
        languageList['es']['www.iobit.com']['/en/install/uninstaller/'] = 'https://www.iobit.com/es/install/uninstaller/index.php';
        languageList['es']['www.iobit.com']['/en/install/sm8/'] = 'https://www.iobit.com/es/install/sm8/index.php';
        languageList['es']['www.iobit.com']['/en/install/uninstallerb/'] = 'https://www.iobit.com/es/install/uninstallerb/index.php';
        languageList['es']['www.iobit.com']['/en/update/asc/'] = 'https://www.iobit.com/es/update/asc/index.php';
        languageList['es']['www.iobit.com']['/en/update/db/'] = 'https://www.iobit.com/es/update/db/index.php';
        languageList['es']['www.iobit.com']['/en/update/imf/'] = 'https://www.iobit.com/es/update/imf/index.php';
        languageList['es']['www.iobit.com']['/en/update/sd/'] = 'https://www.iobit.com/es/update/sd/index.php';
        languageList['es']['www.iobit.com']['/en/update/uninstaller/'] = 'https://www.iobit.com/es/update/uninstaller/index.php';
        languageList['es']['www.iobit.com']['/en/update/sm8/'] = 'https://www.iobit.com/es/update/sm8/index.php';
        languageList['es']['www.iobit.com']['/en/update/iu/'] = 'https://www.iobit.com/es/update/iu/index.php';
        languageList['es']['www.iobit.com']['/en/compare/iu/'] = 'https://www.iobit.com/es/compare/iu/index.php';
        languageList['es']['www.iobit.com']['/en/compare/asc/'] = 'https://www.iobit.com/es/compare/asc/index.php';
        languageList['es']['www.iobit.com']['/en/compare/db/'] = 'https://www.iobit.com/es/compare/db/index.php';
        languageList['es']['www.iobit.com']['/en/compare/imf/'] = 'https://www.iobit.com/es/compare/imf/index.php';
        languageList['es']['www.iobit.com']['/en/compare/sd/'] = 'https://www.iobit.com/es/compare/sd/index.php';
        languageList['es']['www.iobit.com']['/en/renew/ascultimate.php'] = 'https://www.iobit.com/es/renew/ascultimate.php';
        languageList['es']['www.iobit.com']['/advanceduninstaller.php'] = 'https://www.iobit.com/es/advanceduninstaller.php';
        languageList['es']['www.iobit.com']['/en/update/isu/'] = 'https://www.iobit.com/es/update/isu/';
        languageList['es']['www.iobit.com']['/iobitstartmenu8.php'] = 'https://www.iobit.com/es/iobitstartmenu8.php';
        languageList['es']['www.iobit.com']['/es/eula/ascu-eula.php'] = 'https://www.iobit.com/es/eula.php';
        languageList['es']['www.iobit.com']['/es/eula/asc-eula.php'] = 'https://www.iobit.com/es/eula.php';
        languageList['es']['www.iobit.com']['/es/eula/db-eula.php'] = 'https://www.iobit.com/es/eula.php';
        languageList['es']['www.iobit.com']['/es/eula/imf-eula.php'] = 'https://www.iobit.com/es/eula.php';
        languageList['es']['www.iobit.com']['/es/eula/sd-eula.php'] = 'https://www.iobit.com/es/eula.php';
        languageList['es']['www.iobit.com']['/en/mic-test.php'] = 'https://www.iobit.com/es/mic-test.php';
        languageList['es']['www.iobit.com']['/en/iobit-speed-test.php'] = 'https://www.iobit.com/es/iobit-speed-test.php';
        languageList['es']['www.iobit.com']['/en/webcam-test.php'] = 'https://www.iobit.com/es/webcam-test.php';
        languageList['es']['www.iobit.com']['/en/eula.php'] = 'https://www.iobit.com/es/eula.php';
        languageList['es']['www.iobit.com']['/en/privacy.php'] = 'https://www.iobit.com/es/privacy.php';

        languageList['de'] = new Array();
        languageList['de']['www.iobit.com'] = new Array();
        languageList['de']['www.iobit.com']['redirectAll'] = false;
        languageList['de']['www.iobit.com']['defaultRedirectUrl'] = 'https://www.iobit.com/de/';
        languageList['de']['www.iobit.com']['/en/install/asc/'] = 'https://www.iobit.com/de/install/asc/index.php';
        languageList['de']['www.iobit.com']['/en/install/db/'] = 'https://www.iobit.com/de/install/db/index.php';
        languageList['de']['www.iobit.com']['/en/install/imf/'] = 'https://www.iobit.com/de/install/imf/index.php';
        languageList['de']['www.iobit.com']['/en/install/sd/'] = 'https://www.iobit.com/de/install/sd/index.php';
        languageList['de']['www.iobit.com']['/en/install/uninstaller/'] = 'https://www.iobit.com/de/install/uninstaller/index.php';
        languageList['de']['www.iobit.com']['/en/install/sm8/'] = 'https://www.iobit.com/de/install/sm8/index.php';
        languageList['de']['www.iobit.com']['/en/install/uninstallerb/'] = 'https://www.iobit.com/de/install/uninstallerb/index.php';
        languageList['de']['www.iobit.com']['/en/update/asc/'] = 'https://www.iobit.com/de/update/asc/index.php';
        languageList['de']['www.iobit.com']['/en/update/db/'] = 'https://www.iobit.com/de/update/db/index.php';
        languageList['de']['www.iobit.com']['/en/update/imf/'] = 'https://www.iobit.com/de/update/imf/index.php';
        languageList['de']['www.iobit.com']['/en/update/sd/'] = 'https://www.iobit.com/de/update/sd/index.php';
        languageList['de']['www.iobit.com']['/en/update/uninstaller/'] = 'https://www.iobit.com/de/update/uninstaller/index.php';
        languageList['de']['www.iobit.com']['/en/update/sm8/'] = 'https://www.iobit.com/de/update/sm8/index.php';
        languageList['de']['www.iobit.com']['/en/update/iu/'] = 'https://www.iobit.com/de/update/iu/index.php';
        languageList['de']['www.iobit.com']['/en/compare/iu/'] = 'https://www.iobit.com/de/compare/iu/index.php';
        languageList['de']['www.iobit.com']['/en/compare/asc/'] = 'https://www.iobit.com/de/compare/asc/index.php';
        languageList['de']['www.iobit.com']['/en/compare/db/'] = 'https://www.iobit.com/de/compare/db/index.php';
        languageList['de']['www.iobit.com']['/en/compare/imf/'] = 'https://www.iobit.com/de/compare/imf/index.php';
        languageList['de']['www.iobit.com']['/en/compare/sd/'] = 'https://www.iobit.com/de/compare/sd/index.php';
        languageList['de']['www.iobit.com']['/en/renew/ascultimate.php'] = 'https://www.iobit.com/de/renew/ascultimate.php';
        languageList['de']['www.iobit.com']['/iobitsmartdefrag.php'] = 'https://www.iobit.com/de/iobitsmartdefrag.php';
        languageList['de']['www.iobit.com']['/advanceduninstaller.php'] = 'https://www.iobit.com/de/advanceduninstaller.php';
        languageList['de']['www.iobit.com']['/malware-fighter.php'] = 'https://www.iobit.com/de/malware-fighter.php';
        languageList['de']['www.iobit.com']['/malware-fighter-pro.php'] = 'https://www.iobit.com/de/malware-fighter-pro.php';
        languageList['de']['www.iobit.com']['/en/update/isu/'] = 'https://www.iobit.com/de/update/isu/';
        languageList['de']['www.iobit.com']['/iobitstartmenu8.php'] = 'https://www.iobit.com/de/iobitstartmenu8.php';
        languageList['de']['www.iobit.com']['/de/eula/ascu-eula.php'] = 'https://www.iobit.com/de/eula.php';
        languageList['de']['www.iobit.com']['/de/eula/asc-eula.php'] = 'https://www.iobit.com/de/eula.php';
        languageList['de']['www.iobit.com']['/de/eula/db-eula.php'] = 'https://www.iobit.com/de/eula.php';
        languageList['de']['www.iobit.com']['/de/eula/imf-eula.php'] = 'https://www.iobit.com/de/eula.php';
        languageList['de']['www.iobit.com']['/de/eula/sd-eula.php'] = 'https://www.iobit.com/de/eula.php';
        languageList['de']['www.iobit.com']['/en/mic-test.php'] = 'https://www.iobit.com/de/mic-test.php';
        languageList['de']['www.iobit.com']['/en/iobit-speed-test.php'] = 'https://www.iobit.com/de/iobit-speed-test.php';
        languageList['de']['www.iobit.com']['/en/webcam-test.php'] = 'https://www.iobit.com/de/webcam-test.php';
        languageList['de']['www.iobit.com']['/en/eula.php'] = 'https://www.iobit.com/de/eula.php';
        languageList['de']['www.iobit.com']['/en/privacy.php'] = 'https://www.iobit.com/de/privacy.php';


        languageList['it'] = new Array();
        languageList['it']['www.iobit.com'] = new Array();
        languageList['it']['www.iobit.com']['redirectAll'] = false;
        languageList['it']['www.iobit.com']['defaultRedirectUrl'] = 'https://www.iobit.com/it/';
        languageList['it']['purchase.iobit.com'] = new Array();
        languageList['it']['purchase.iobit.com']['redirectAll'] = false;
        languageList['it']['purchase.iobit.com']['defaultRedirectUrl'] = '';
        languageList['it']['www.iobit.com']['/en/install/asc/'] = 'https://www.iobit.com/it/install/asc/index.php';
        languageList['it']['www.iobit.com']['/en/install/db/'] = 'https://www.iobit.com/it/install/db/index.php';
        languageList['it']['www.iobit.com']['/en/install/imf/'] = 'https://www.iobit.com/it/install/imf/index.php';
        languageList['it']['www.iobit.com']['/en/install/sd/'] = 'https://www.iobit.com/it/install/sd/index.php';
        languageList['it']['www.iobit.com']['/en/install/uninstaller/'] = 'https://www.iobit.com/it/install/uninstaller/index.php';
        languageList['it']['www.iobit.com']['/en/install/sm8/'] = 'https://www.iobit.com/it/install/sm8/index.php';
        languageList['it']['www.iobit.com']['/en/install/uninstallerb/'] = 'https://www.iobit.com/it/install/uninstallerb/index.php';
        languageList['it']['www.iobit.com']['/en/update/asc/'] = 'https://www.iobit.com/it/update/asc/index.php';
        languageList['it']['www.iobit.com']['/en/update/db/'] = 'https://www.iobit.com/it/update/db/index.php';
        languageList['it']['www.iobit.com']['/en/update/imf/'] = 'https://www.iobit.com/it/update/imf/index.php';
        languageList['it']['www.iobit.com']['/en/update/sd/'] = 'https://www.iobit.com/it/update/sd/index.php';
        languageList['it']['www.iobit.com']['/en/update/uninstaller/'] = 'https://www.iobit.com/it/update/uninstaller/index.php';
        languageList['it']['www.iobit.com']['/en/update/sm8/'] = 'https://www.iobit.com/it/update/sm8/index.php';
        languageList['it']['www.iobit.com']['/en/update/iu/'] = 'https://www.iobit.com/it/update/iu/index.php';
        languageList['it']['www.iobit.com']['/en/compare/iu/'] = 'https://www.iobit.com/it/compare/iu/index.php';
        languageList['it']['www.iobit.com']['/en/compare/asc/'] = 'https://www.iobit.com/it/compare/asc/index.php';
        languageList['it']['www.iobit.com']['/en/compare/db/'] = 'https://www.iobit.com/it/compare/db/index.php';
        languageList['it']['www.iobit.com']['/en/compare/imf/'] = 'https://www.iobit.com/it/compare/imf/index.php';
        languageList['it']['www.iobit.com']['/en/compare/sd/'] = 'https://www.iobit.com/it/compare/sd/index.php';
        languageList['it']['www.iobit.com']['/en/renew/ascultimate.php'] = 'https://www.iobit.com/it/renew/ascultimate.php';
        languageList['it']['www.iobit.com']['/en/update/isu/'] = 'https://www.iobit.com/it/update/isu/';
        languageList['it']['www.iobit.com']['/en/mic-test.php'] = 'https://www.iobit.com/it/mic-test.php';
        languageList['it']['www.iobit.com']['/en/iobit-speed-test.php'] = 'https://www.iobit.com/it/iobit-speed-test.php';
        languageList['it']['www.iobit.com']['/en/webcam-test.php'] = 'https://www.iobit.com/it/webcam-test.php';
        languageList['it']['www.iobit.com']['/it/eula/ascu-eula.php'] = 'https://www.iobit.com/it/eula.php';
        languageList['it']['www.iobit.com']['/it/eula/asc-eula.php'] = 'https://www.iobit.com/it/eula.php';
        languageList['it']['www.iobit.com']['/it/eula/db-eula.php'] = 'https://www.iobit.com/it/eula.php';
        languageList['it']['www.iobit.com']['/it/eula/imf-eula.php'] = 'https://www.iobit.com/it/eula.php';
        languageList['it']['www.iobit.com']['/it/eula/sd-eula.php'] = 'https://www.iobit.com/it/eula.php';
        languageList['it']['www.iobit.com']['/en/eula.php'] = 'https://www.iobit.com/it/eula.php';
        languageList['it']['www.iobit.com']['/en/privacy.php'] = 'https://www.iobit.com/it/privacy.php';

        languageList['nl'] = new Array();
        languageList['nl']['www.iobit.com'] = new Array();
        languageList['nl']['www.iobit.com']['redirectAll'] = false;
        languageList['nl']['www.iobit.com']['defaultRedirectUrl'] = 'https://www.iobit.com/nl/';
        languageList['nl']['www.iobit.com']['/en/install/asc/'] = 'https://www.iobit.com/nl/install/asc/index.php';
        languageList['nl']['www.iobit.com']['/en/install/db/'] = 'https://www.iobit.com/nl/install/db/index.php';
        languageList['nl']['www.iobit.com']['/en/install/imf/'] = 'https://www.iobit.com/nl/install/imf/index.php';
        languageList['nl']['www.iobit.com']['/en/install/sd/'] = 'https://www.iobit.com/nl/install/sd/index.php';
        languageList['nl']['www.iobit.com']['/en/install/uninstaller/'] = 'https://www.iobit.com/nl/install/uninstaller/index.php';
        languageList['nl']['www.iobit.com']['/en/update/asc/'] = 'https://www.iobit.com/nl/update/asc/index.php';
        languageList['nl']['www.iobit.com']['/en/update/db/'] = 'https://www.iobit.com/nl/update/db/index.php';
        languageList['nl']['www.iobit.com']['/en/update/imf/'] = 'https://www.iobit.com/nl/update/imf/index.php';
        languageList['nl']['www.iobit.com']['/en/update/sd/'] = 'https://www.iobit.com/nl/update/sd/index.php';
        languageList['nl']['www.iobit.com']['/en/update/uninstaller/'] = 'https://www.iobit.com/nl/update/uninstaller/index.php';
        languageList['nl']['www.iobit.com']['/en/update/iu/'] = 'https://www.iobit.com/nl/update/iu/index.php';
        languageList['nl']['www.iobit.com']['/en/compare/iu/'] = 'https://www.iobit.com/nl/compare/iu/index.php';
        languageList['nl']['www.iobit.com']['/en/compare/asc/'] = 'https://www.iobit.com/nl/compare/asc/index.php';
        languageList['nl']['www.iobit.com']['/en/compare/db/'] = 'https://www.iobit.com/nl/compare/db/index.php';
        languageList['nl']['www.iobit.com']['/en/compare/imf/'] = 'https://www.iobit.com/nl/compare/imf/index.php';
        languageList['nl']['www.iobit.com']['/en/update/isu/'] = 'https://www.iobit.com/nl/update/isu/';
        languageList['nl']['www.iobit.com']['/en/mic-test.php'] = 'https://www.iobit.com/nl/mic-test.php';
        languageList['nl']['www.iobit.com']['/en/iobit-speed-test.php'] = 'https://www.iobit.com/nl/iobit-speed-test.php';
        languageList['nl']['www.iobit.com']['/en/webcam-test.php'] = 'https://www.iobit.com/nl/webcam-test.php';
        languageList['nl']['www.iobit.com']['/en/eula.php'] = 'https://www.iobit.com/nl/eula.php';
        languageList['nl']['www.iobit.com']['/en/privacy.php'] = 'https://www.iobit.com/nl/privacy.php';


        languageList['pt'] = new Array();
        languageList['pt']['www.iobit.com'] = new Array();
        languageList['pt']['www.iobit.com']['redirectAll'] = false;
        languageList['pt']['www.iobit.com']['defaultRedirectUrl'] = 'https://www.iobit.com/pt/';
        languageList['pt']['www.iobit.com']['/en/install/asc/'] = 'https://www.iobit.com/pt/install/asc/index.php';
        languageList['pt']['www.iobit.com']['/en/install/db/'] = 'https://www.iobit.com/pt/install/db/index.php';
        languageList['pt']['www.iobit.com']['/en/install/imf/'] = 'https://www.iobit.com/pt/install/imf/index.php';
        languageList['pt']['www.iobit.com']['/en/install/sd/'] = 'https://www.iobit.com/pt/install/sd/index.php';
        languageList['pt']['www.iobit.com']['/en/install/uninstaller/'] = 'https://www.iobit.com/pt/install/uninstaller/index.php';
        languageList['pt']['www.iobit.com']['/en/update/asc/'] = 'https://www.iobit.com/pt/update/asc/index.php';
        languageList['pt']['www.iobit.com']['/en/update/db/'] = 'https://www.iobit.com/pt/update/db/index.php';
        languageList['pt']['www.iobit.com']['/en/update/imf/'] = 'https://www.iobit.com/pt/update/imf/index.php';
        languageList['pt']['www.iobit.com']['/en/update/sd/'] = 'https://www.iobit.com/pt/update/sd/index.php';
        languageList['pt']['www.iobit.com']['/en/update/uninstaller/'] = 'https://www.iobit.com/pt/update/uninstaller/index.php';
        languageList['pt']['www.iobit.com']['/en/update/sm8/'] = 'https://www.iobit.com/pt/update/sm8/index.php';
        languageList['pt']['www.iobit.com']['/en/update/iu/'] = 'https://www.iobit.com/pt/update/iu/index.php';
        languageList['pt']['www.iobit.com']['/en/compare/iu/'] = 'https://www.iobit.com/pt/compare/iu/index.php';
        languageList['pt']['www.iobit.com']['/en/compare/asc/'] = 'https://www.iobit.com/pt/compare/asc/index.php';
        languageList['pt']['www.iobit.com']['/en/compare/db/'] = 'https://www.iobit.com/pt/compare/db/index.php';
        languageList['pt']['www.iobit.com']['/en/compare/imf/'] = 'https://www.iobit.com/pt/compare/imf/index.php';
        languageList['pt']['www.iobit.com']['/en/update/isu/'] = 'https://www.iobit.com/pt/update/isu/';
        languageList['pt']['www.iobit.com']['/en/mic-test.php'] = 'https://www.iobit.com/pt/mic-test.php';
        languageList['pt']['www.iobit.com']['/en/iobit-speed-test.php'] = 'https://www.iobit.com/pt/iobit-speed-test.php';
        languageList['pt']['www.iobit.com']['/en/webcam-test.php'] = 'https://www.iobit.com/pt/webcam-test.php';
        languageList['pt']['www.iobit.com']['/en/eula.php'] = 'https://www.iobit.com/pt/eula.php';
        languageList['pt']['www.iobit.com']['/en/privacy.php'] = 'https://www.iobit.com/pt/privacy.php';


        // languageList['sv'] = new Array();
        // languageList['sv']['www.iobit.com'] = new Array();
        // languageList['sv']['www.iobit.com']['redirectAll'] = false;
        // languageList['sv']['www.iobit.com']['defaultRedirectUrl'] = 'https://www.iobit.com/sv/';
        // languageList['sv']['www.iobit.com']['/en/install/asc/'] = 'https://www.iobit.com/sv/install/asc/index.php';
        // languageList['sv']['www.iobit.com']['/en/install/db/'] = 'https://www.iobit.com/sv/install/db/index.php';
        // languageList['sv']['www.iobit.com']['/en/install/imf/'] = 'https://www.iobit.com/sv/install/imf/index.php';
        // languageList['sv']['www.iobit.com']['/en/install/sd/'] = 'https://www.iobit.com/sv/install/sd/index.php';
        // languageList['sv']['www.iobit.com']['/en/install/uninstaller/'] = 'https://www.iobit.com/sv/install/uninstaller/index.php';
        // languageList['sv']['www.iobit.com']['/en/install/sm8/'] = 'https://www.iobit.com/sv/install/sm8/index.php';
        // languageList['sv']['www.iobit.com']['/en/install/uninstallerb/'] = 'https://www.iobit.com/sv/install/uninstallerb/index.php';
        // languageList['sv']['www.iobit.com']['/en/update/asc/'] = 'https://www.iobit.com/sv/update/asc/index.php';
        // languageList['sv']['www.iobit.com']['/en/update/db/'] = 'https://www.iobit.com/sv/update/db/index.php';
        // languageList['sv']['www.iobit.com']['/en/update/imf/'] = 'https://www.iobit.com/sv/update/imf/index.php';
        // languageList['sv']['www.iobit.com']['/en/update/sd/'] = 'https://www.iobit.com/sv/update/sd/index.php';
        // languageList['sv']['www.iobit.com']['/en/update/uninstaller/'] = 'https://www.iobit.com/sv/update/uninstaller/index.php';
        // languageList['sv']['www.iobit.com']['/en/update/sm8/'] = 'https://www.iobit.com/sv/update/sm8/index.php';
        // languageList['sv']['www.iobit.com']['/en/update/iu/'] = 'https://www.iobit.com/sv/update/iu/index.php';
        // languageList['sv']['www.iobit.com']['/en/compare/iu/'] = 'https://www.iobit.com/sv/compare/iu/index.php';
        // languageList['sv']['www.iobit.com']['/en/compare/asc/'] = 'https://www.iobit.com/sv/compare/asc/index.php';
        // languageList['sv']['www.iobit.com']['/en/compare/db/'] = 'https://www.iobit.com/sv/compare/db/index.php';
        // languageList['sv']['www.iobit.com']['/en/compare/imf/'] = 'https://www.iobit.com/sv/compare/imf/index.php';
        // languageList['sv']['www.iobit.com']['/en/compare/sd/'] = 'https://www.iobit.com/sv/compare/sd/index.php';
        // languageList['sv']['www.iobit.com']['/en/renew/ascultimate.php'] = 'https://www.iobit.com/sv/renew/ascultimate.php';
        // languageList['sv']['www.iobit.com']['/en/update/isu/'] = 'https://www.iobit.com/sv/update/isu/';
        // languageList['sv']['www.iobit.com']['/en/mic-test.php'] = 'https://www.iobit.com/sv/mic-test.php';
        // languageList['sv']['www.iobit.com']['/en/iobit-speed-test.php'] = 'https://www.iobit.com/sv/iobit-speed-test.php';
        // languageList['sv']['www.iobit.com']['/en/webcam-test.php'] = 'https://www.iobit.com/sv/webcam-test.php';
        // languageList['sv']['www.iobit.com']['/en/eula.php'] = 'https://www.iobit.com/sv/eula.php';
        // languageList['sv']['www.iobit.com']['/en/privacy.php'] = 'https://www.iobit.com/sv/privacy.php';


        // languageList['dk'] = new Array();
        // languageList['dk']['www.iobit.com'] = new Array();
        // languageList['dk']['www.iobit.com']['redirectAll'] = false;
        // languageList['dk']['www.iobit.com']['defaultRedirectUrl'] = 'https://www.iobit.com/dk/';
        // languageList['dk']['www.iobit.com']['/en/install/asc/'] = 'https://www.iobit.com/dk/install/asc/index.php';
        // languageList['dk']['www.iobit.com']['/en/install/db/'] = 'https://www.iobit.com/dk/install/db/index.php';
        // languageList['dk']['www.iobit.com']['/en/install/imf/'] = 'https://www.iobit.com/dk/install/imf/index.php';
        // languageList['dk']['www.iobit.com']['/en/install/sd/'] = 'https://www.iobit.com/dk/install/sd/index.php';
        // languageList['dk']['www.iobit.com']['/en/install/uninstaller/'] = 'https://www.iobit.com/dk/install/uninstaller/index.php';
        // languageList['dk']['www.iobit.com']['/en/install/sm8/'] = 'https://www.iobit.com/dk/install/sm8/index.php';
        // languageList['dk']['www.iobit.com']['/en/install/uninstallerb/'] = 'https://www.iobit.com/dk/install/uninstallerb/index.php';
        // languageList['dk']['www.iobit.com']['/en/update/asc/'] = 'https://www.iobit.com/dk/update/asc/index.php';
        // languageList['dk']['www.iobit.com']['/en/update/db/'] = 'https://www.iobit.com/dk/update/db/index.php';
        // languageList['dk']['www.iobit.com']['/en/update/imf/'] = 'https://www.iobit.com/dk/update/imf/index.php';
        // languageList['dk']['www.iobit.com']['/en/update/sd/'] = 'https://www.iobit.com/dk/update/sd/index.php';
        // languageList['dk']['www.iobit.com']['/en/update/uninstaller/'] = 'https://www.iobit.com/dk/update/uninstaller/index.php';
        // languageList['dk']['www.iobit.com']['/en/update/sm8/'] = 'https://www.iobit.com/dk/update/sm8/index.php';
        // languageList['dk']['www.iobit.com']['/en/update/iu/'] = 'https://www.iobit.com/dk/update/iu/index.php';
        // languageList['dk']['www.iobit.com']['/en/compare/iu/'] = 'https://www.iobit.com/dk/compare/iu/index.php';
        // languageList['dk']['www.iobit.com']['/en/compare/asc/'] = 'https://www.iobit.com/dk/compare/asc/index.php';
        // languageList['dk']['www.iobit.com']['/en/compare/db/'] = 'https://www.iobit.com/dk/compare/db/index.php';
        // languageList['dk']['www.iobit.com']['/en/compare/imf/'] = 'https://www.iobit.com/dk/compare/imf/index.php';
        // languageList['dk']['www.iobit.com']['/en/compare/sd/'] = 'https://www.iobit.com/dk/compare/sd/index.php';
        // languageList['dk']['www.iobit.com']['/en/renew/ascultimate.php'] = 'https://www.iobit.com/dk/renew/ascultimate.php';
        // languageList['dk']['www.iobit.com']['/en/update/isu/'] = 'https://www.iobit.com/dk/update/isu/';
        // languageList['dk']['www.iobit.com']['/en/eula.php'] = 'https://www.iobit.com/dk/eula.php';
        // languageList['dk']['www.iobit.com']['/en/privacy.php'] = 'https://www.iobit.com/dk/privacy.php';



        languageList['pl'] = new Array();
        languageList['pl']['www.iobit.com'] = new Array();
        languageList['pl']['www.iobit.com']['redirectAll'] = false;
        languageList['pl']['www.iobit.com']['defaultRedirectUrl'] = 'https://www.iobit.com/pl/';
        languageList['pl']['www.iobit.com']['/en/install/asc/'] = 'https://www.iobit.com/pl/install/asc/index.php';
        languageList['pl']['www.iobit.com']['/en/install/db/'] = 'https://www.iobit.com/pl/install/db/index.php';
        languageList['pl']['www.iobit.com']['/en/install/imf/'] = 'https://www.iobit.com/pl/install/imf/index.php';
        languageList['pl']['www.iobit.com']['/en/install/sd/'] = 'https://www.iobit.com/pl/install/sd/index.php';
        languageList['pl']['www.iobit.com']['/en/install/uninstaller/'] = 'https://www.iobit.com/pl/install/uninstaller/index.php';
        languageList['pl']['www.iobit.com']['/en/install/sm8/'] = 'https://www.iobit.com/pl/install/sm8/index.php';
        languageList['pl']['www.iobit.com']['/en/install/uninstallerb/'] = 'https://www.iobit.com/pl/install/uninstallerb/index.php';
        languageList['pl']['www.iobit.com']['/en/update/asc/'] = 'https://www.iobit.com/pl/update/asc/index.php';
        languageList['pl']['www.iobit.com']['/en/update/db/'] = 'https://www.iobit.com/pl/update/db/index.php';
        languageList['pl']['www.iobit.com']['/en/update/imf/'] = 'https://www.iobit.com/pl/update/imf/index.php';
        languageList['pl']['www.iobit.com']['/en/update/sd/'] = 'https://www.iobit.com/pl/update/sd/index.php';
        languageList['pl']['www.iobit.com']['/en/update/uninstaller/'] = 'https://www.iobit.com/pl/update/uninstaller/index.php';
        languageList['pl']['www.iobit.com']['/en/update/sm8/'] = 'https://www.iobit.com/pl/update/sm8/index.php';
        languageList['pl']['www.iobit.com']['/en/update/iu/'] = 'https://www.iobit.com/pl/update/iu/index.php';
        languageList['pl']['www.iobit.com']['/en/compare/iu/'] = 'https://www.iobit.com/pl/compare/iu/index.php';
        languageList['pl']['www.iobit.com']['/en/compare/asc/'] = 'https://www.iobit.com/pl/compare/asc/index.php';
        languageList['pl']['www.iobit.com']['/en/compare/db/'] = 'https://www.iobit.com/pl/compare/db/index.php';
        languageList['pl']['www.iobit.com']['/en/compare/imf/'] = 'https://www.iobit.com/pl/compare/imf/index.php';
        languageList['pl']['www.iobit.com']['/en/compare/sd/'] = 'https://www.iobit.com/pl/compare/sd/index.php';
        languageList['pl']['www.iobit.com']['/en/renew/ascultimate.php'] = 'https://www.iobit.com/pl/renew/ascultimate.php';
        languageList['pl']['www.iobit.com']['/en/update/isu/'] = 'https://www.iobit.com/pl/update/isu/';
        languageList['pl']['www.iobit.com']['/en/mic-test.php'] = 'https://www.iobit.com/pl/mic-test.php';
        languageList['pl']['www.iobit.com']['/en/iobit-speed-test.php'] = 'https://www.iobit.com/pl/iobit-speed-test.php';
        languageList['pl']['www.iobit.com']['/en/webcam-test.php'] = 'https://www.iobit.com/pl/webcam-test.php';
        languageList['pl']['www.iobit.com']['/en/eula.php'] = 'https://www.iobit.com/pl/eula.php';
        languageList['pl']['www.iobit.com']['/en/privacy.php'] = 'https://www.iobit.com/pl/privacy.php';


        this.filePath = this.filePath.replace(/.html/, '.php');
        this.filePath = this.filePath.replace(/index.php/, '');

        //if(this.domain=='purchase.iobit.com'&&this.language=='ja'){
        //    var redirectUrl = 'http://jp.iobit.com/store.html';
        //}else{
        var redirectUrl = languageList[this.language][this.domain][this.filePath];
        //}
        if (this.language == 'ja') {
            if (this.filePath.indexOf('/en/knowledge') != -1) {
                return redirectUrl == undefined;
            }
        }
        //if(exclude_url.indexOf(this.filePath)<0)
        return redirectUrl == undefined ? languageList[this.language][this.domain]['redirectAll'] ? languageList[this.language][this.domain]['defaultRedirectUrl'] : undefined : redirectUrl;
    },

        this.getBathRedirectUrl = function () {
            var redirectUrl;
            if (this.domain == 'purchase.iobit.com') {
                if (this.dirPath.substring(0, 6) == '/2014/') {
                    /*if(this.language!='en'){
                        alert(this.language);
                        alert(MApp(2.2).language.langArr[0]);
                    }*/
                    redirectUrl = 'https://purchase.iobit.com/' + this.language + '/asc/index.php';
                }
            }
            return redirectUrl;
        },

        this.run = function () {
            var targetUrl;
            var irpid = MApp(2.2).cookie.get('irpid');
            var dirname = this.dirPath.split("/");
            if (this.language == 'nl') {
                var change = MApp(2.2).cookie.get('changecountry');

                if (dirname[2] != 'install' || dirname[2] != 'update' || dirname[2] != 'compare') {
                    if (change != 1 && irpid == undefined) {
                        var newdomain = MApp(2.2).url.getDomain();
                        var newdirPath = MApp(2.2).url.getDirPath();
                        var newfilePath = MApp(2.2).url.getFilePath().substring(4);
                        MApp(2.2).cookie.remove('country');
                        if (newdirPath.substring(1, 3) != 'nl') {
                            targetUrl = 'https://' + newdomain + '/' + this.language + '/' + newfilePath + '?b';
                        }
                    }
                }
            }


            if (this.language == 'fr' || this.language == 'it' || this.language == 'de' || this.language == 'es' || this.language == 'pt') {
                targetUrl = this.getBathRedirectUrl();
                //if(this.language!='en') alert(targetUrl);
            }
            if (targetUrl == undefined) {
                if (this.language == 'ja' || this.language == 'ru' || this.language == 'fr' || this.language == 'es' || this.language == 'de' || this.language == 'it' || this.language == 'pt' || this.language == 'nl' || this.language == 'pl') {
                    if (this.language == 'ja' && this.filePath == '/compare/imf-aff/') {
                    } else {
                        if (!MApp(2.2).cookie.get('irpid')) {
                            targetUrl = this.getRedirectUrl();
                        }
                    }
                }
            }
            /*if(this.language == 'ru'){
                var newfilePath = MApp(2.2).url.getFilePath().substring(4);
                if(newfilePath=='index.php'){
                    targetUrl = 'https://ru.iobit.com/';
                }else{
                    targetUrl = 'https://ru.iobit.com/'+newfilePath;
                }
            }*/

            if (targetUrl != undefined && this.language != 'ja') {
                currentUrlQuery = MApp(2.2).url.getQuery();
                targetUrlArr = MApp(2.2).url.parseUrl(targetUrl);
                targetUrlQueryArr = MApp(2.2).url.parseQuery(targetUrl);
                if (currentUrlQuery) {
                    targetUrl = 'https://' + targetUrlArr[0] + targetUrlArr[1];
                    targetUrl += '?' + currentUrlQuery;
                    if (targetUrlQueryArr[0]) targetUrl += '&' + targetUrlQueryArr[0];
                    if (targetUrlQueryArr[1]) targetUrl += '#' + targetUrlQueryArr[1];
                }
            }
            // if(this.language == 'ja'&&this.domain == 'purchase.iobit.com'){
            //     var aff = MApp(2.2).url.getParameters('AFF');
            //     console.log(aff);
            //     if(aff!='') return false;
            // }
            if (targetUrl == 'http://jp.iobit.com/rd/sd-safeupdate') {
                var to = MApp(2.2).url.getParameters('to');
                if (to == 'freeurl') targetUrl = 'http://jp.iobit.com/rd/sd-freeurl';
                if (to == 'proupdate') targetUrl = 'http://jp.iobit.com/rd/sd-proupdate';
            }

            //aff 
            if (targetUrl == undefined) {
                var pagename = ['advancedsystemcarepro.php', 'driver-booster-pro.php', 'advanced-systemcare-antivirus.php', 'malware-fighter-pro.php', 'advanceduninstallerpro.php', 'iobit-software-updater.php', 'iobitsmartdefrag.php', 'iobitstartmenu8.php', 'password-protected-folder.php', 'store.php', 'products.php'];

                var uirpid = MApp(2.2).url.getParameters('irpid');
                if (!!irpid || !!uirpid) {
                    var urllan = dirname[1];
                    if (urllan != 'en') {
                        var completeurl = MApp(2.2).url.getUrl();
                        if (dirname[2] == 'install' || dirname[2] == 'update' || dirname[2] == 'compare') {
                            targetUrl = completeurl.replace('/'+urllan+'/', "/en/");
                        } else if ($.inArray(this.fileName, pagename)>-1) {
                            targetUrl = completeurl.replace('/'+urllan+'/', "/en/");
                        }
                    }
                }
            }

            if (targetUrl != undefined) {
                window.location = targetUrl;
                hrefurl = true;
            }
        }
});
var hrefurl = false;
Redirect.run();

// MacOS IOS system jump
var clientSystemType = MApp(2.2).client.getSystemType();
var clientdomain = MApp(2.2).url.getDomain();
var filePath = MApp(2.2).url.getFilePath();
//if(clientdomain=='www.iobit.com'){
if (filePath != '/en/lostcode.php' && filePath != '/en/refund.php') {
    if (clientSystemType == 'ios' || clientSystemType == 'macos') {
        if (MApp(2.2).cookie.get('macDeviceRedirect') != '1') {
            MApp(2.2).cookie.expireTime = 24 * 60 * 60 * 1000;
            MApp(2.2).cookie.set('macDeviceRedirect', '1');
            if (!MApp(2.2).cookie.get('irpid')) {
                window.location.href = 'https://www.macbooster.net';
            } else {
                window.location.href = 'https://www.macboost.net?ref=fs';
            }
            hrefurl = true;
        }
    }
}
//}

// Android device jump
//if (filePath == '/' || filePath == '/index.php' || filePath == '/iobit2015.php' || filePath == '/index.html' || filePath == '/advanced-mobile-care.php' || filePath == '/advanced-mobile-care.html') {
/*if (clientSystemType == 'android') {
    if(MApp(2.2).url.getParameters('from')=='mobile'){
        MApp(2.2).cookie.expireTime = 24 * 60 * 60 * 1000;
        MApp(2.2).cookie.set('androidDeviceRedirect', '1');
    }else{
        if (MApp(2.2).cookie.get('androidDeviceRedirect') != '1') {
            window.location.href = 'http://mobile.iobit.com/m/';
            hrefurl=true;
        }
    }
}*/
//}


//A/B TEST
if (!hrefurl) {
    /*if (filePath == '/' || filePath == '/index.php') {
            if (MApp(2.2).cookie.get('view_old_check') == '1') {
            }else if (MApp(2.2).cookie.get('view_2015_check') == '1') {
                window.location.href = './iobit2015.php';
            }else{
                if (Math.ceil(Math.random()*100)%2==0){
                    MApp(2.2).cookie.expireTime = 24 * 60 * 60 * 1000;
                    MApp(2.2).cookie.set('view_old_check', '1');
                }else{
                    MApp(2.2).cookie.expireTime = 24 * 60 * 60 * 1000;
                    MApp(2.2).cookie.set('view_2015_check', '1');
                    window.location.href = './iobit2015.php';
                }
            }
    }*/


    /*if (filePath == '/store.php') {
        if (MApp(2.2).cookie.get('view_store_check') == '1') {
        }else if (MApp(2.2).cookie.get('view_store2015_check') == '1') {
            window.location.href = './store2015.php';
        }else{
            if (Math.ceil(Math.random()*100)%2==0){
                MApp(2.2).cookie.expireTime = 24 * 60 * 60 * 1000;
                MApp(2.2).cookie.set('view_store_check', '1');
            }else{
                MApp(2.2).cookie.expireTime = 24 * 60 * 60 * 1000;
                MApp(2.2).cookie.set('view_store2015_check', '1');
                window.location.href = './store2015.php';
            }
        }
    }*/
}


$(document).ready(function () {
    $("a").each(function (i, item) {
        var tw = MApp(2.2).datetime.getTimeZone();
        //alert(this.href);
        //alert("i=" + i + ",item="+jQuery(item).attr('href'));
        if (jQuery(item).attr('href') && jQuery(item).attr('href').indexOf("://www.iobit.com/buy.php") != -1) {
            this.href = this.href + '&tw=' + tw;
        }

    });
});
