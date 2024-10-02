import { CST } from "../CST";

export class load_scene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    }
    init(){
        this.game.canvas.style.marginLeft = '100px';
    }

    preload(){

        this.dress_qty = 0;
        this.edit_qty = Number(Math.max(localStorage.getItem('slot'),0));
        this.dress_icon = document.getElementById('dress_qty');
        this.edit_icon = document.getElementById('edit_qty');
        this.heart_icon = document.getElementById('heart_icon');
        this.comment_icon = document.getElementById('comment_icon');
        this.solar_icon = document.getElementById('solar_icon');

        //Graphic Assets
        this.load.image("logo_bg", "./assets/solar tech.png");
        this.load.image("bg_menu", "./assets/background_menu.jpg");
        this.load.image("bg_menu2", "./assets/backgrounds/background_menu2.jpg");
        this.load.image("title", "./assets/title.png");
        this.load.image("main_doll", "./assets/doll/doll_preview.png");
        this.load.image("play_btn", "./assets/play.png");
        this.load.image("backdrop_1", "./assets/bottom_graphics.png");
        this.load.image("backdrop_1_front", "./assets/bottom_graphics_front.png");
        this.load.image("slot_1", "./assets/slot_sprite.png");
        
        // Music
        this.load.audio('musicaudio', './assets/music/neonrunner_loop.ogg');

        // SFX
        this.load.audio('tap1','./assets/sfx/tap_1.ogg');
        this.load.audio('tap2','./assets/sfx/tap_2.WAV');
        this.load.audio('tap3','./assets/sfx/tap_3.WAV');
        this.load.audio('tap3_2','./assets/sfx/tap_3_reverse.wav');
        this.load.audio('tap4','./assets/sfx/tap_4.WAV');
        this.load.audio('metal','./assets/sfx/metalic.ogg');
        this.load.audio('takepic', './assets/sfx/picture_taken.ogg');



        // Cloth Icon Medium
        this.load.spritesheet('dresses', "./assets/dress_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('tops', "./assets/tops_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('faceacc', "./assets/faceacc_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('hairs', "./assets/hair_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('backhairs', "./assets/backhair_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('shirts', "./assets/shirt_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('skirts', "./assets/skirt_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('pants', "./assets/pants_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('acc1', "./assets/acc1_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('acc2', "./assets/acc2_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('acc3', "./assets/acc3_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('eyes', "./assets/eye_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('eyebrows', "./assets/eyebrow_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('backgrounds', "./assets/background_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('noses', "./assets/nose_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('mouths', "./assets/mouth_spritesheet.png", { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('ears', "./assets/ear_spritesheet.png", { frameWidth: 96, frameHeight: 96 });

        this.load.spritesheet('skins', "./assets/skincolors/skins_spritesheet.png", { frameWidth: 19, frameHeight: 19 });
        this.load.spritesheet('dolls', "./assets/doll/dolls.png",{ frameWidth: 680, frameHeight: 920 });
        
        // EFX
        this.load.spritesheet('particle1',"./assets/anims/particle1/particles1_spritesheet.png",{frameWidth: 360, frameHeight: 360});
        // Load Atlas EFX
        this.load.atlas('efx',"./assets/anims/particle1/particles1_spritesheet.png",'./assets/anims/particle1/efx1_atlas.json');
        
        // EFX 2 (Click)
        this.load.spritesheet('particle2',"./assets/anims/particle2/click_anim.png",{frameWidth: 96, frameHeight: 96});
        // Load Atlas EFX 2 (Click)
        this.load.atlas('efx2',"./assets/anims/particle2/click_anim.png",'./assets/anims/particle2/click_anim_atlas.json');

        
        // Transitions
        // Transition 1
        this.load.spritesheet('trans1',"./assets/anims/transition1/trans1.png",{frameWidth: 360, frameHeight: 640});
        // Load Atlas Transition 1
        this.load.atlas('transfx1',"./assets/anims/transition1/trans1.png",'./assets/anims/transition1/trans1_atlas.json');

        // Dolls 1
        this.load.atlas('dollskin', "./assets/doll/dolls.png", "./assets/doll/dolls_atlas.json");




        // Icons
        this.load.image("dress_icon1", "./assets/dress_icon.png");
        this.load.image("dress_icon2", "./assets/dress_icon2.png");
        this.load.image("dress_icon3", "./assets/dress_icon3.png");
        this.load.image("dress_icon4", "./assets/dress_icon4.png");
        this.load.image("dress_icon5", "./assets/dress_icon5.png");
        this.load.image("dress_icon6", "./assets/dress_icon6.png");
        this.load.image("dress_icon7", "./assets/dress_icon7.png");
        this.load.image("dress_icon8", "./assets/dress_icon8.png");
        this.load.image("dress_icon9", "./assets/dress_icon9.png");
        this.load.image("dress_icon10", "./assets/dress_icon10.png");
        this.load.image("dress_icon11", "./assets/dress_icon11.png");
        this.load.image("dress_icon12", "./assets/dress_icon12.png");
        this.load.image("dress_icon13", "./assets/dress_icon13.png");
        this.load.image("dress_icon14", "./assets/dress_icon14.png");
        this.load.image("dress_icon15", "./assets/dress_icon15.png");
        this.load.image("dress_icon16", "./assets/dress_icon16.png");
        this.load.image("dress_icon17", "./assets/dress_icon17.png");
        

        // Dress Graphics
        this.load.image("dress_1", "./assets/dress/dress_gph1.png");
        this.load.image("dress_2", "./assets/dress/dress_gph2.png");
        this.load.image("dress_3", "./assets/dress/dress_gph3.png");

        this.dress_qty += 3


        // Tops Graphics
        this.load.image("top_1", "./assets/top/top_gph1.png");
        this.load.image("top_2", "./assets/top/top_gph2.png");
        this.load.image("top_3", "./assets/top/top_gph3.png");
        this.load.image("top_4", "./assets/top/top_gph4.png");
        this.load.image("top_5", "./assets/top/top_gph5.png");
        this.load.image("top_6", "./assets/top/top_gph6.png");
        this.load.image("top_7", "./assets/top/top_gph7.png");
        this.load.image("top_8", "./assets/top/top_gph8.png");
        this.load.image("top_9", "./assets/top/top_gph9.png");
        this.load.image("top_10", "./assets/top/top_gph10.png");
        this.load.image("top_11", "./assets/top/top_gph11.png");
        this.load.image("top_12", "./assets/top/top_gph12.png");
        this.load.image("top_13", "./assets/top/top_gph13.png");
        this.load.image("top_13_2", "./assets/top/top_gph13_2.png");
        this.load.image("top_14", "./assets/top/top_gph14.png");
        this.load.image("top_14_2", "./assets/top/top_gph14_2.png");
        this.load.image("top_14_3", "./assets/top/top_gph14_3.png");
        this.load.image("top_14_4", "./assets/top/top_gph14_4.png");
        this.load.image("top_14_5", "./assets/top/top_gph14_5.png");
        this.load.image("top_14_6", "./assets/top/top_gph14_6.png");
        this.load.image("top_14_7", "./assets/top/top_gph14_7.png");
        this.load.image("top_15", "./assets/top/top_gph15.png");
        this.load.image("top_16", "./assets/top/top_gph16.png");
        this.load.image("top_17", "./assets/top/top_gph17.png");
        this.load.image("top_18", "./assets/top/top_gph18.png");
        this.load.image("top_19", "./assets/top/top_gph19.png");
        this.load.image("top_20", "./assets/top/top_gph20.png");
        this.load.image("top_21", "./assets/top/top_gph21.png");
        this.load.image("top_22", "./assets/top/top_gph22.png");
        this.load.image("top_23", "./assets/top/top_gph23.png");
        
        this.dress_qty += 23

        // Hair Graphics
        this.load.image("hair_1", "./assets/hair/hair_gph1.png");
        this.load.image("hair_2", "./assets/hair/hair_gph2.png");
        this.load.image("hair_3", "./assets/hair/hair_gph3.png");
        this.load.image("hair_4", "./assets/hair/hair_gph4.png");
        this.load.image("hair_5", "./assets/hair/hair_gph5.png");
        this.load.image("hair_6", "./assets/hair/hair_gph6.png");
        this.load.image("hair_7", "./assets/hair/hair_gph7.png");
        this.load.image("hair_8", "./assets/hair/hair_gph8.png");
        this.load.image("hair_9", "./assets/hair/hair_gph9.png");
        this.load.image("hair_10", "./assets/hair/hair_gph10.png");

        this.dress_qty += 10;

        // BackHair Graphics
        this.load.image("backhair_1", "./assets/backhair/backhair_gph1.png");
        this.load.image("backhair_2", "./assets/backhair/backhair_gph2.png");
        this.load.image("backhair_3", "./assets/backhair/backhair_gph3.png");
        this.load.image("backhair_4", "./assets/backhair/backhair_gph4.png");
        this.load.image("backhair_5", "./assets/backhair/backhair_gph5.png");
        this.load.image("backhair_6", "./assets/backhair/backhair_gph6.png");
        this.load.image("backhair_7", "./assets/backhair/backhair_gph7.png");

        this.dress_qty += 7;

        // Shirt Graphics
        this.load.image("shirt_1_1", "./assets/shirt/shirt_gph1_1.png");
        this.load.image("shirt_1_2", "./assets/shirt/shirt_gph1_2.png");
        this.load.image("shirt_2_1", "./assets/shirt/shirt_gph2_1.png");
        this.load.image("shirt_2_2", "./assets/shirt/shirt_gph2_2.png");
        this.load.image("shirt_3_1", "./assets/shirt/shirt_gph3_1.png");
        this.load.image("shirt_3_2", "./assets/shirt/shirt_gph3_2.png");
        this.load.image("shirt_3_3", "./assets/shirt/shirt_gph3_3.png");
        this.load.image("shirt_4_1", "./assets/shirt/shirt_gph4_1.png");
        this.load.image("shirt_4_2", "./assets/shirt/shirt_gph4_2.png");
        this.load.image("shirt_4_3", "./assets/shirt/shirt_gph4_3.png");
        this.load.image("shirt_4_4", "./assets/shirt/shirt_gph4_4.png");

        this.dress_qty += 4;

        // Pants Graphics
        this.load.image("pants_1_1", "./assets/pants/pants_gph1_1.png");
        this.load.image("pants_1_2", "./assets/pants/pants_gph1_2.png");
        this.load.image("pants_2_1", "./assets/pants/pants_gph2_1.png");
        this.load.image("pants_2_2", "./assets/pants/pants_gph2_2.png");
        this.load.image("pants_2_3", "./assets/pants/pants_gph2_3.png");
        this.load.image("pants_3_1", "./assets/pants/pants_gph3_1.png");
        this.load.image("pants_3_2", "./assets/pants/pants_gph3_2.png");
        this.load.image("pants_3_3", "./assets/pants/pants_gph3_3.png");
        this.load.image("pants_3_4", "./assets/pants/pants_gph3_4.png");
        this.load.image("pants_4_1", "./assets/pants/pants_gph4_1.png");
        this.load.image("pants_4_2", "./assets/pants/pants_gph4_2.png");
        this.load.image("pants_4_3", "./assets/pants/pants_gph4_3.png");
        this.load.image("pants_4_4", "./assets/pants/pants_gph4_4.png");

        this.dress_qty += 4;

        // Skirt Graphics
        this.load.image("skirt_1_1", "./assets/skirt/skirt_gph1_1.png");
        this.load.image("skirt_1_2", "./assets/skirt/skirt_gph1_2.png");
        this.load.image("skirt_1_3", "./assets/skirt/skirt_gph1_3.png");
        this.load.image("skirt_1_4", "./assets/skirt/skirt_gph1_4.png");
        this.load.image("skirt_1_5", "./assets/skirt/skirt_gph1_5.png");
        this.load.image("skirt_1_6", "./assets/skirt/skirt_gph1_6.png");
        this.load.image("skirt_1_7", "./assets/skirt/skirt_gph1_7.png");
        this.load.image("skirt_1_8", "./assets/skirt/skirt_gph1_8.png");
        this.load.image("skirt_1_9", "./assets/skirt/skirt_gph1_9.png");
        this.load.image("skirt_2_1", "./assets/skirt/skirt_gph2_1.png");
        this.load.image("skirt_2_2", "./assets/skirt/skirt_gph2_2.png");
        this.load.image("skirt_2_3", "./assets/skirt/skirt_gph2_3.png");
        this.load.image("skirt_2_4", "./assets/skirt/skirt_gph2_4.png");
        this.load.image("skirt_2_5", "./assets/skirt/skirt_gph2_5.png");
        this.load.image("skirt_2_6", "./assets/skirt/skirt_gph2_6.png");
        this.load.image("skirt_2_7", "./assets/skirt/skirt_gph2_7.png");
        this.load.image("skirt_2_8", "./assets/skirt/skirt_gph2_8.png");
        this.load.image("skirt_2_9", "./assets/skirt/skirt_gph2_9.png");
        this.load.image("skirt_3_1", "./assets/skirt/skirt_gph3_1.png");
        this.load.image("skirt_3_2", "./assets/skirt/skirt_gph3_2.png");

        this.dress_qty += 3;

        // STRAINS (Acc1) Graphics
        this.load.image("strains_1", "./assets/strains/strains_1.png");

        this.dress_qty += 1;

        // Acc2 Graphics
        this.load.image("acc2_1_1", "./assets/acc2/acc2_gph1_1.png");
        this.load.image("acc2_1_2", "./assets/acc2/acc2_gph1_2.png");
        this.load.image("acc2_2_1", "./assets/acc2/acc2_gph2_1.png");
        this.load.image("acc2_3_1", "./assets/acc2/acc2_gph3_1.png");
        this.load.image("acc2_3_2", "./assets/acc2/acc2_gph3_2.png");
        this.load.image("acc2_3_3", "./assets/acc2/acc2_gph3_3.png");
        this.load.image("acc2_3_4", "./assets/acc2/acc2_gph3_4.png");


        this.dress_qty += 3;

        // Acc3 Graphics
        this.load.image("acc3_1", "./assets/acc3/acc3_gph1.png");
        this.load.image("acc3_2", "./assets/acc3/acc3_gph2.png");

        this.dress_qty += 1;
        
        // Eyes
        this.load.image("eye1_1", "./assets/eyes/eye1/eye1_gph1.png");
        this.load.image("eye1_2", "./assets/eyes/eye1/eye1_gph2.png");
        this.load.image("eye1_3", "./assets/eyes/eye1/eye1_gph3.png");
        this.load.image("eye1_4", "./assets/eyes/eye1/eye1_gph4.png");
        this.load.image("eye1_5", "./assets/eyes/eye1/eye1_gph5.png");
        this.load.image("eye1_6", "./assets/eyes/eye1/eye1_gph6.png");

        this.dress_qty += 1;

        // Eyebrows
        this.load.image("eyebrow_1", "./assets/eyebrows/eyebrow_gph1.png");
        this.load.image("eyebrow_2", "./assets/eyebrows/eyebrow_gph2.png");
        this.load.image("eyebrow_3", "./assets/eyebrows/eyebrow_gph3.png");
        this.load.image("eyebrow_4", "./assets/eyebrows/eyebrow_gph4.png");
        this.load.image("eyebrow_5", "./assets/eyebrows/eyebrow_gph5.png");
        this.load.image("eyebrow_6", "./assets/eyebrows/eyebrow_gph6.png");
        this.load.image("eyebrow_7", "./assets/eyebrows/eyebrow_gph7.png");
        this.load.image("eyebrow_8", "./assets/eyebrows/eyebrow_gph8.png");
        this.load.image("eyebrow_9", "./assets/eyebrows/eyebrow_gph9.png");
        this.load.image("eyebrow_10", "./assets/eyebrows/eyebrow_gph10.png");
        this.load.image("eyebrow_11", "./assets/eyebrows/eyebrow_gph11.png");

        this.dress_qty += 11;

        // Backgronds
        this.load.image("background_0", "./assets/backgrounds/background_0.jpg");
        this.load.image("background_1", "./assets/backgrounds/background_1.png");
        this.load.image("background_2", "./assets/backgrounds/background_2.png");
        this.load.image("background_3", "./assets/backgrounds/background_3.png");

        this.dress_qty += 4;
        // Noses
        this.load.image("nose_1", "./assets/nose/nose_1.png");
        this.load.image("nose_2", "./assets/nose/nose_2.png");
        this.load.image("nose_3", "./assets/nose/nose_3.png");
        this.load.image("nose_4", "./assets/nose/nose_4.png");
        this.load.image("nose_5", "./assets/nose/nose_5.png");
        this.load.image("nose_6", "./assets/nose/nose_6.png");
        this.load.image("nose_7", "./assets/nose/nose_7.png");
        this.load.image("nose_8", "./assets/nose/nose_8.png");
        this.load.image("nose_9", "./assets/nose/nose_9.png");
        this.load.image("nose_10", "./assets/nose/nose_10.png");
        this.load.image("nose_11", "./assets/nose/nose_11.png");

        this.dress_qty += 11;

        // Mouths
        this.load.image("mouth_1", "./assets/mouth/mouth_1.png");
        this.load.image("mouth_2", "./assets/mouth/mouth_2.png");
        this.load.image("mouth_3", "./assets/mouth/mouth_3.png");
        this.load.image("mouth_4", "./assets/mouth/mouth_4.png");
        this.load.image("mouth_5", "./assets/mouth/mouth_5.png");
        this.load.image("mouth_6", "./assets/mouth/mouth_6.png");
        this.load.image("mouth_7", "./assets/mouth/mouth_7.png");
        this.load.image("mouth_8", "./assets/mouth/mouth_8.png");
        this.load.image("mouth_9", "./assets/mouth/mouth_9.png");
        this.load.image("mouth_10", "./assets/mouth/mouth_10.png");
        this.load.image("mouth_11", "./assets/mouth/mouth_11.png");

        this.dress_qty += 11;

        // Ears 
        this.load.image("ear_1", "./assets/ears/ear_1.png");
        this.load.image("ear_2", "./assets/ears/ear_2.png");
        // Ear 2 Color Variations
        this.load.image("ear2_1", "./assets/ears/ear2/ear2_1.png");
        this.load.image("ear2_2", "./assets/ears/ear2/ear2_2.png");
        this.load.image("ear2_3", "./assets/ears/ear2/ear2_3.png");
        this.load.image("ear2_4", "./assets/ears/ear2/ear2_4.png");
        this.load.image("ear2_5", "./assets/ears/ear2/ear2_5.png");
        this.load.image("ear2_6", "./assets/ears/ear2/ear2_6.png");
        this.load.image("ear2_7", "./assets/ears/ear2/ear2_7.png");
        this.load.image("ear2_8", "./assets/ears/ear2/ear2_8.png");
        this.load.image("ear2_9", "./assets/ears/ear2/ear2_9.png");
        this.load.image("ear2_10", "./assets/ears/ear2/ear2_10.png");
        this.load.image("ear2_11", "./assets/ears/ear2/ear2_11.png");
        this.load.image("ear2_12", "./assets/ears/ear2/ear2_12.png");
        this.load.image("ear2_13", "./assets/ears/ear2/ear2_13.png");
        this.load.image("ear2_14", "./assets/ears/ear2/ear2_14.png");
        this.load.image("ear2_15", "./assets/ears/ear2/ear2_15.png");
        this.load.image("ear2_16", "./assets/ears/ear2/ear2_16.png");
        this.load.image("ear2_17", "./assets/ears/ear2/ear2_17.png");

        this.dress_qty += 2;

        // Etc
        this.load.image("right_arrow1", "./assets/right_arrow_1.png");
        this.load.image("left_arrow1", "./assets/left_arrow_1.png");
        this.load.image("frame", "./assets/frame.png");
        this.load.image("facecolor", "./assets/icons/facecolor_icon.png");
        this.load.image("menu", "./assets/icons/menu_icon.png");
        this.load.image("recycle", "./assets/icons/recycle_icon.png");
        this.load.image("del_clothes", "./assets/delete_clothes.png");
        this.load.image("return", "./assets/close_1.png");
        this.load.image("takepic", "./assets/takepic.png");
        this.load.image("download_img", "./assets/download_pic.png");
        this.load.image("download_img2", "./assets/download_pic2.png");
        this.load.image("save_img", "./assets/save_pic.png");
        this.load.image("save_img_gray", "./assets/save_pic_gray.png");
        this.load.image("save_lore", "./assets/save_lore.png")
        this.load.image("backdrop_menu", "./assets/backdrop_menu.png");
        this.load.image("sound","./assets/sound_mixer.png");
        this.load.image("quit_btn","./assets/quit_btn.png");
        this.load.image("load_btn","./assets/load.png");
        this.load.image("credits_btn","./assets/credits.png");
        this.load.image("add_new","./assets/add_new.png");
        this.load.image("load_doll","./assets/load_doll.png");
        this.load.image("menu_btn","./assets/menu.png");
        this.load.image("playload","./assets/play_load.png");
        this.load.image("frameload","./assets/frame_load.png");
        this.load.image("recycle2","./assets/recycle bin 2.png")
        this.load.image("yes_btn","./assets/yes_btn.png")
        this.load.image("no_btn","./assets/no_btn.png")
        this.load.image("icon_outline","./assets/icon_outline.png")
        this.load.image("color_panel","./assets/color_panel.png")
        this.load.image("white_dot", "./assets/whitedot.png")
        this.load.image("fullscreen", "./assets/full_screen.png")
        this.load.image("camera", "./assets/camera.png")
        this.load.image("save", "./assets/save.png")
        this.load.image("loadreturn", "./assets/load_return.png")
        this.load.image("quitgamebtn", "./assets/quitgame_btn.png")
        this.load.image("whitedot_sel", "./assets/whitedot_sel.png")
        this.load.image("bottom_menu","./assets/bottom_menu.png")
        this.load.image("loading_face", "./assets/loading.png")
        this.load.image("lore_btn", "./assets/note.png")
        this.load.image("return_load", "./assets/return_load.png")
        this.load.image("return_save", "./assets/return_save.png")
        this.load.image("dontsave", "./assets/dontsave.png")
        this.load.image("up_arrow", "./assets/icons/up_arrow.png")
        this.load.image("down_arrow", "./assets/icons/down_arrow.png")

        //socials
        this.load.image("x_icon", "./assets/web/x_icon.png")

        // Transition
        this.load.image("transition1","./assets/velocity_sprite.png");

        // wallpaper
        this.load.image("loading_img","./assets/backgrounds/placeholder2.jpg")



        //Lista de Valores
        
        
        // Imagen in Loadingy
    
        // Create a large rectangle
        let rectangle = this.add.graphics();
        rectangle.fillGradientStyle(0x4c68f5, 0x4c68f5, 0x020826, 0x020826, 1);
        rectangle.fillRect(0, 0, 720, 1280);
    

        // bg bar
        let bgBar = this.add.graphics();
        bgBar.fillStyle(0xffffff, 1);
        bgBar.fillRect(this.game.renderer.width * 0.1, this.game.renderer.height / 2 + 100, this.game.renderer.width * 0.8, 50);

        
        let loading_bar = this.add.graphics();
            
    

        this.load.on("progress", (percent)=>{
            loading_bar.clear();
            loading_bar.fillStyle(0x00ff00, 1);
            loading_bar.fillRect(this.game.renderer.width * 0.1, this.game.renderer.height / 2 + 100, this.game.renderer.width * 0.8 * percent, 50);
        })

        this.load.on("complete", () =>{
            this.timedEvent = new Phaser.Time.TimerEvent({ delay: 2000 });
            this.time.addEvent(this.timedEvent);
            
        })

    }

    create(){
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.50, "logo_bg");
    this.dress_icon.innerHTML = this.dress_qty;
    this.edit_icon.innerHTML = this.edit_qty;
    this.heart_icon.style.filter = "brightness(0)";
    this.comment_icon.style.filter = "brightness(0)";
    this.solar_icon.style.filter = "brightness(0)";
    
    }

    update(){
    const progress = this.timedEvent.getProgress();

    if(progress===1){
        this.scene.start(CST.SCENES.MENU);
    }
       
    }
}