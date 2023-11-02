package ca.qc.cstj.andromia.serializers

import kotlinx.serialization.*
import kotlinx.serialization.internal.SerialClassDescImpl
import java.lang.Exception
import java.text.ParseException
import java.text.SimpleDateFormat
import java.util.*

@Serializer(forClass = Date::class)
object DateSerializer: KSerializer<Date> {
    private val dateFormat: SimpleDateFormat = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    private val dateFormat2: SimpleDateFormat = SimpleDateFormat("yyyy-MM-dd HH:mm:ss")

    override val descriptor: SerialDescriptor = SerialClassDescImpl("Date")

    override fun serialize(output: Encoder, obj: Date) {
        try{
            output.encodeString(dateFormat.format(obj))
        } catch (e : Exception) {
            try {
                output.encodeString((dateFormat2.format(obj)))
            } catch(e : Exception) {
                throw ParseException(e.toString(), 0)
            }
        }
    }

    override fun deserialize(input: Decoder): Date {

        val decodedString = input.decodeString()
        try{
            return dateFormat.parse(decodedString)
        } catch (e : Exception) {
            try {
                return dateFormat2.parse(decodedString)
            } catch(e : Exception) {
                throw ParseException(e.toString(), 0)
            }
        }
    }

}