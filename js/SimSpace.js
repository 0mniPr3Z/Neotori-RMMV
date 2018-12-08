rpg_Core    (functions techniques et mathematique)
rpg_managers
DataManager :  The static class that manages the database and game objects.
 ConfigManager : The static class that manages the configuration data.
 StorageManager :  The static class that manages storage for saving game data.
 Game_System :  The game object class for the system data.
 ImageManager :  The static class that loads images, creates bitmap objects and retains them.
 AudioManager :  The static class that handles BGM, BGS, ME and SE.
 SoundManager :  The static class that plays sound effects defined in the database
 TextManager :  The static class that handles terms and messages.
 SceneManager :  The static class that manages scene transitions
 BattleManager :  The static class that manages battle progress.
rpg_objects.js
Game_Temp :  The game object class for temporary data that is not included in save data.
  Game_System :  The game object class for the system data.
  Game_Timer :  The game object class for the timer.
  Game_Message :  The game object class for the state of the message window that displays text or selections, etc.
  Game_Switches :  The game object class for switches.
  Game_Variables :  The game object class for variables.
  Game_SelfSwitches :  The game object class for self switches.
 Game_Screen :  The game object class for screen effect data, such as changes in color tone and flashes.
 Game_Picture :  The game object class for a picture.
 Game_Item :  The game object class for handling skills, items, weapons, and armor. It is required because save data should not include the database object itself.
 Game_Action :  The game object class for a battle action.
 Game_ActionResult :  class for a result of a battle action. For convinience, all member variables in this class are public.
 Game_BattlerBase :  The superclass of Game_Battler. It mainly contains parameters calculation.
 Game_Battler :  The superclass of Game_Actor and Game_Enemy. It contains methods for sprites and actions.
 Game_Actor :  The game object class for an actor.
 Game_Enemy :  The game object class for an enemy.
 Game_Unit :  The superclass of Game_Party and Game_Troop.
 Game_Party :  The game object class for the party. Information such as gold and items is included.
 Game_Troop :  The game object class for a troop and the battle-related data.
 Game_Map :  The game object class for a map. It contains scrolling and passage determination functions.
 Game_CommonEvent : class for common event. It contains functionality for running parallel process events.
 Game_CharacterBase :  superclass of Game_Chara. handles basic info, as coordinates and images, shared by characters.
 Game_Character :  The superclass of Game_Player, Game_Follower, GameVehicle, and Game_Event.
 Game_Player :  class for the player. It contains event starting determinants and map scrolling functions.
 Game_Follower : class for follower. follower is allied character,other than the front character, displayed in the party.
 Game_Followers :  The wrapper class for a follower array.
 Game_Vehicle :  The game object class for a vehicle.
 Game_Event :  The game object class for an event. It contains functionality for event page switching and running parallel process events.
 Game_Interpreter :  The interpreter for running event commands.
 rpg_scenes.js
 Scene_Base :  The superclass of all scenes within the game.
 Scene_Boot :  The scene class for initializing the entire game.
 Scene_Title :  The scene class of the title screen.
 Scene_Map :  The scene class of the map screen.
 Scene_MenuBase :  The superclass of all the menu-type scenes.
 Scene_Menu :  The scene class of the menu screen.
 Scene_ItemBase :  The superclass of Scene_Item and Scene_Skill.
 Scene_Item :  The scene class of the item screen.
 Scene_Skill :  The scene class of the skill screen.
 Scene_Equip :  The scene class of the equipment screen.
 Scene_Status :  The scene class of the status screen.
 Scene_Options :  The scene class of the options screen.
 Scene_File :  The superclass of Scene_Save and Scene_Load.
 Scene_Save :  The scene class of the save screen.
 Scene_Load :  The scene class of the load screen.
 Scene_GameEnd :  The scene class of the game end screen.
 Scene_Shop :  The scene class of the shop screen.
 Scene_Name :  The scene class of the name input screen.
 Scene_Debug :  The scene class of the debug screen.
 Scene_Battle :  The scene class of the battle screen.
 Scene_Gameover :  The scene class of the game over screen.
 rpg_sprites.js
 Sprite_Base :  The sprite class with a feature which displays animations.
 Sprite_Button :  The sprite for displaying a button.
 Sprite_Character :  The sprite for displaying a character.
 Sprite_Battler :  The superclass of Sprite_Actor and Sprite_Enemy.
 Sprite_Actor :  The sprite for displaying an actor.
 Sprite_Enemy :  The sprite for displaying an enemy.
 Sprite_Animation :  The sprite for displaying an animation.
 Sprite_Damage :  The sprite for displaying a popup damage.
 Sprite_StateIcon :  The sprite for displaying state icons.
 Sprite_StateOverlay :  The sprite for displaying an overlay image for a state.
 Sprite_Weapon :  The sprite for displaying a weapon image for attacking.
 Sprite_Balloon :  The sprite for displaying a balloon icon.
 Sprite_Picture :  The sprite for displaying a picture.
 Sprite_Timer :  The sprite for displaying the timer.
 Sprite_Destination :  The sprite for displaying the destination place of the touch input.
 Spriteset_Base :  The superclass of Spriteset_Map and Spriteset_Battle.
 Spriteset_Map :  The set of sprites on the map screen.
 Spriteset_Battle :  The set of sprites on the battle screen.
 rpg_windows.js
 Window_Base :  The superclass of all windows within the game.
 Window_Selectable :  The window class with cursor movement and scroll functions.
 Window_Command :  The superclass of windows for selecting a command.
 Window_HorzCommand :  The command window for the horizontal selection format.
 Window_Help :  The window for displaying the description of the selected item.
 Window_Gold :  The window for displaying the party's gold.
 Window_MenuCommand :  The window for selecting a command on the menu screen.
 Window_MenuStatus :  The window for displaying party member status on the menu screen.
 Window_MenuActor :  The window for selecting a target actor on the item and skill screens.
 Window_ItemCategory :  The window for selecting a category of items on the item and shop screens.
 Window_ItemList :  The window for selecting an item on the item screen.
 Window_SkillType :  The window for selecting a skill type on the skill screen.
 Window_SkillStatus :  The window for displaying the skill user's status on the skill screen.
 Window_SkillList :  The window for selecting a skill on the skill screen.
 Window_EquipStatus :  The window for displaying parameter changes on the equipment screen.
 Window_EquipCommand :  The window for selecting a command on the equipment screen.
 Window_EquipSlot :  The window for selecting an equipment slot on the equipment screen.
 Window_EquipItem :  The window for selecting an equipment item on the equipment screen.
 Window_Status :  The window for displaying full status on the status screen.
 Window_Options :  The window for changing various settings on the options screen.
 Window_SavefileList :  The window for selecting a save file on the save and load screens.
 Window_ShopCommand :  The window for selecting buy/sell on the shop screen.
 Window_ShopBuy :  The window for selecting an item to buy on the shop screen.
 Window_ShopSell :  The window for selecting an item to sell on the shop screen.
 Window_ShopNumber :  The window for inputting quantity of items to buy or sell on the shop screen.
 Window_ShopStatus :  displaying number of items in possession and the actor's equipment on the shop screen.
 Window_NameEdit :  The window for editing an actor's name on the name input screen.
 Window_NameInput :  The window for selecting text characters on the name input screen.
 Window_ChoiceList :  The window used for the event command [Show Choices].
 Window_NumberInput :  The window used for the event command [Input Number].
 Window_EventItem :  The window used for the event command [Select Item].
 Window_Message :  The window for displaying text messages.
 Window_ScrollText :  displaying scrolling text. No frame displayed,  its handled as a window for convenience.
 Window_MapName :  The window for displaying the map name on the map screen.
 Window_BattleLog :  window displaying battle progress.Noframe displayed, it is handled as a window for convenience.
 Window_PartyCommand :  The window for selecting whether to fight or escape on the battle screen.
 Window_ActorCommand :  The window for selecting an actor's action on the battle screen.
 Window_BattleStatus :  The window for displaying the status of party members on the battle screen.
 Window_BattleActor :  The window for selecting a target actor on the battle screen.
 Window_BattleEnemy :  The window for selecting a target enemy on the battle screen.
 Window_BattleSkill :  The window for selecting a skill to use on the battle screen.
 Window_BattleItem :  The window for selecting an item to use on the battle screen.
 Window_TitleCommand :  The window for selecting New Game/Continue on the title screen.
 Window_GameEnd :  The window for selecting "Go to Title" on the game end screen.
 Window_DebugRange :  The window for selecting a block of switches/variables on the debug screen.
 Window_DebugEdit :  The window for displaying switches and variables on the debug screen.

