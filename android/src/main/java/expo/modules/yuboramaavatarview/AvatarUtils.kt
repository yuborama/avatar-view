package expo.modules.avatarview

import android.graphics.Color
import kotlin.random.Random

fun getInitialsFromName(name: String): String {
  if (name.isBlank()) return ""

  val parts = name.trim().split(" ").filter { it.isNotBlank() }
  val first = parts.getOrNull(0)?.firstOrNull()?.toString() ?: ""
  val second = parts.getOrNull(1)?.firstOrNull()?.toString() ?: ""

  return (first + second).uppercase()
}

fun generateRandomColor(): Int {
  val hue = Random.nextFloat() * 360f
  return Color.HSVToColor(floatArrayOf(hue, 0.55f, 0.78f))
}