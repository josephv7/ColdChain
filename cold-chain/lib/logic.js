/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

// /**
//  * Sample transaction
//  * @param {org.example.mynetwork.SampleTransaction} sampleTransaction
//  * @transaction
//  */
// async function sampleTransaction(tx) {
//     // Save the old value of the asset.
//     const oldValue = tx.asset.value;

//     // Update the asset with the new value.
//     tx.asset.value = tx.newValue;

//     // Get the asset registry for the asset.
//     const assetRegistry = await getAssetRegistry('org.example.mynetwork.SampleAsset');
//     // Update the asset in the asset registry.
//     await assetRegistry.update(tx.asset);

//     // Emit an event for the modified asset.
//     let event = getFactory().newEvent('org.example.mynetwork', 'SampleEvent');
//     event.asset = tx.asset;
//     event.oldValue = oldValue;
//     event.newValue = tx.newValue;
//     emit(event);
// }





/**
 * TemperatureDrop
 * @param {org.example.mynetwork.TemperatureDrop} tx
 * @transaction
 */
async function temperatureDrop(tx) {
    // Save the old value of the asset.
    const oldTemperature = tx.asset.temperature;
    const oldLocation = tx.asset.location;

    // Update the asset with the new value.
    tx.asset.temperature = tx.newTemperature;
    tx.asset.location = tx.newLocation;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.mynetwork.MedicinePackage');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.example.mynetwork', 'TemperatureDropEvent');
    event.asset = tx.asset;
    event.oldTemperature = oldTemperature;
    event.oldLocation = oldLocation;
    event.newTemperature = tx.newTemperature;
    event.newLocation = tx.newLocation;
    emit(event);
}





/**
 * HolderChange
 * @param {org.example.mynetwork.HolderChange} tx
 * @transaction
 */
async function holderChange(tx) {
    // Save the old value of the asset.
    const oldHolder = tx.asset.holder;
    
    // Update the asset with the new value.
    tx.asset.holder = tx.newHolder;
   

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.mynetwork.MedicinePackage');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.example.mynetwork', 'HolderChangeEvent');
    event.asset = tx.asset;
    event.oldHolder = oldHolder;
    event.newHolder = tx.newHolder;
    emit(event);
}


